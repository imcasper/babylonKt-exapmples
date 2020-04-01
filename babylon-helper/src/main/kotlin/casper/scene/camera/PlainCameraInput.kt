package casper.scene.camera

import BABYLON.Matrix
import BABYLON.Scene
import casper.core.Disposable
import casper.core.DisposableHolder
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.input.*
import casper.math.clamp
import casper.platform.lockCursor
import casper.platform.unlockCursor
import casper.signal.util.then
import casper.util.toLine


/**
 * 	Действия пользователя преобразует в команды камере
 */
class PlainCameraInput(val scene: Scene, val inputDispatcher: InputDispatcher, val controller: PlainCameraController, val settings: PlainCameraInputSettings, val onPivot: (Line3d) -> Vector3d?) : Disposable {
	val camera = controller.camera

	private val holder = DisposableHolder()
	private val actionHolder = DisposableHolder()
	private var rotation = false
	private var translation = false

	init {
		inputDispatcher.onMouseWheel.then(holder, ::onMouseWheel)
		inputDispatcher.onMouseDown.then(holder, ::onMouseDown)
	}

	override fun dispose() {
		holder.dispose()
		actionHolder.dispose()
	}

	private fun onMouseWheel(it: MouseWheel) {
		updatePivot(it.position)
		controller.zoom(it.wheel.clamp(-1.0, 1.0) * settings.zoomSpeed)
	}

	private fun onMouseDown(it: MouseDown) {
		if (rotation || translation) return

		if (it.button == settings.rotateButton) {
			updatePivot(it.position)
			lockCursor()
			rotation = true
		} else if (it.button == settings.translateButton) {
			updatePivot(it.position)
			translation = true
		} else {
			return
		}

		actionHolder.removeAllDisposable()
		inputDispatcher.onMouseMove.then(actionHolder, ::onMouseMove)
		inputDispatcher.onMouseUp.then(actionHolder, ::onMouseUp)
	}

	private fun onMouseMove(it: MouseMove) {
		applyPointerMove(it.movement)
	}

	private fun applyPointerMove(movement: Vector2d) {
		val movementNormalized = normalizePointerMovement(movement)

		if (rotation) {
			val yaw = -movementNormalized.x * settings.yawSpeed
			val pitch = -movementNormalized.y * settings.pitchSpeed
			controller.rotate(yaw, pitch)
		}

		if (translation) {
			val forward = -movementNormalized.y
			val right = movementNormalized.x
			controller.translate(right, forward)
		}
	}

	private fun onMouseUp(it: MouseUp) {
		applyPointerMove(it.movement)

		if (it.button == settings.rotateButton) {
			unlockCursor()
			rotation = false
		}
		if (it.button == settings.translateButton) {
			translation = false
		}
		actionHolder.removeAllDisposable()
	}


	private fun normalizePointerMovement(movement: Vector2d): Vector2d {
		val canvas = scene.getEngine().getRenderingCanvas()!!
		val viewportSize = Vector2d(canvas.width.toDouble(), canvas.height.toDouble())
		return movement / viewportSize
	}

	private fun updatePivot(pointerPosition: Vector2d) {
		val camera = scene.activeCamera
		val length = camera?.maxZ ?: 1e9
		val ray = scene.createPickingRay(pointerPosition.x, pointerPosition.y, Matrix.Identity(), scene.activeCamera)
		val pivot = onPivot(ray.toLine(length))
		if (pivot != null) {
			controller.pivot = pivot
		}
	}
}
