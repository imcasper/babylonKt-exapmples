package casper.scene.camera

import BABYLON.Matrix
import BABYLON.Ray
import BABYLON.Scene
import casper.core.Disposable
import casper.core.DisposableHolder
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.input.*
import casper.math.clamp
import casper.platform.lockCursor
import casper.platform.unlockCursor
import casper.signal.util.then


/**
 * 	Действия пользователя преобразует в команды камере
 */
class PlainCameraInput(val scene: Scene, val inputDispatcher:InputDispatcher, val controller: PlainCameraController, val settings: PlainCameraInputSettings, val getPivot: (Ray) -> Vector3d?) : Disposable {
	val camera = controller.camera

	class PointerInfo(val position: Vector2d, val offset: Vector2d)

	private val holder = DisposableHolder()
	private val actionHolder = DisposableHolder()
	private var pointerInfo: PointerInfo? = null
	private var rotationPivot: Vector3d? = null
	private var translationPivot: Vector3d? = null

	init {
		inputDispatcher.onMouseWheel.then(holder, ::onMouseWheel)
		inputDispatcher.onMouseDown.then(holder, ::onMouseDown)
	}

	override fun dispose() {
		holder.dispose()
		actionHolder.dispose()
	}

	fun getRotationPivot(): Vector3d? {
		return rotationPivot
	}

	fun getTranslationPivot(): Vector3d? {
		return translationPivot
	}

	private fun onMouseWheel(it: MouseWheel) {
		controller.zoom(createPivot(it.position), it.wheel.clamp(-1.0, 1.0) * settings.zoomSpeed)
	}

	private fun onMouseDown(it: MouseDown) {
		pointerInfo = updatePointerInfo(pointerInfo, it.position, it.movement)

		if (rotationPivot != null || translationPivot != null) return

		if (it.button == settings.rotateButton) {
			rotationPivot = createPivot(it.position)
			if (rotationPivot != null) {
				lockCursor()
			}
		} else if (it.button == settings.translateButton) {
			translationPivot = createPivot(it.position)
		} else {
			return
		}

		actionHolder.removeAllDisposable()
		inputDispatcher.onMouseMove.then(actionHolder, ::onMouseMove)
		inputDispatcher.onMouseUp.then(actionHolder, ::onMouseUp)
	}

	private fun onMouseMove(it: MouseMove) {
		val nextPointerInfo = updatePointerInfo(pointerInfo, it.position, it.movement)
		pointerInfo = nextPointerInfo

		rotationPivot?.let { rotationPivot ->
			val yaw = -nextPointerInfo.offset.x * settings.yawSpeed
			val pitch = -nextPointerInfo.offset.y * settings.pitchSpeed

			controller.rotate(rotationPivot, yaw, pitch)
		}

		translationPivot?.let { translationPivot ->
			val forward = -nextPointerInfo.offset.y
			val right = nextPointerInfo.offset.x
			controller.translate(translationPivot, right, forward)
		}
	}

	private fun onMouseUp(it: MouseUp) {
		pointerInfo = updatePointerInfo(pointerInfo, it.position, it.movement)

		unlockCursor()
		rotationPivot = null
		translationPivot = null
		actionHolder.removeAllDisposable()
	}


	private fun updatePointerInfo(lastPointer: PointerInfo?, nextPointerPosition: Vector2d, movement: Vector2d): PointerInfo {
		val lastPointerPosition = lastPointer?.position

		val canvas = scene.getEngine().getRenderingCanvas()!!
		val viewportSize = Vector2d(canvas.width.toDouble(), canvas.height.toDouble())


		val offset = if (movement != Vector2d.ZERO || lastPointerPosition == null) {
			movement / viewportSize
		} else {
			(nextPointerPosition - lastPointerPosition) / viewportSize
		}
		return PointerInfo(nextPointerPosition, offset)
	}

	private fun createPivot(pointerPosition: Vector2d): Vector3d? {
		val ray = scene.createPickingRay(pointerPosition.x, pointerPosition.y, Matrix.Identity(), scene.activeCamera)
		return getPivot(ray) ?: return null
	}


}
