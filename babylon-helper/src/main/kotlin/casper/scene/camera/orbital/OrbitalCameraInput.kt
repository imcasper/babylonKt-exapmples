package casper.scene.camera.orbital

import BABYLON.EventState
import BABYLON.Scene
import casper.core.Disposable
import casper.core.DisposableHolder
import casper.geometry.Vector2d
import casper.input.*
import casper.math.clamp
import casper.platform.lockCursor
import casper.platform.unlockCursor
import casper.signal.util.then
import kotlin.browser.document


/**
 * 	Действия пользователя преобразует в команды камере
 */
class OrbitalCameraInput(val scene: Scene, val inputDispatcher: InputDispatcher, val camera:OrbitalCameraController, val settings:OrbitalCameraInputSettings) : Disposable {
	private val holder = DisposableHolder()
	private val actionHolder = DisposableHolder()
	private var rotation = false
	private var translation = false

	private var zoomAccumulated = 0.0

	init {
		inputDispatcher.onMouseWheel.then(holder, ::onMouseWheel)
		inputDispatcher.onMouseDown.then(holder, ::onMouseDown)

		document.addEventListener("mouseout", {
			dropMouse()
		})

		scene.onBeforeRenderObservable.add({_:Scene, _:EventState->
			val fractional = 0.2

			if (zoomAccumulated >= fractional) {
				zoomAccumulated -= fractional
				camera.zoom(settings.zoomSpeed * fractional)
			} else 			if (zoomAccumulated <=-fractional) {
				zoomAccumulated += fractional
				camera.zoom(-settings.zoomSpeed * fractional)
			}

		})
	}

	override fun dispose() {
		holder.dispose()
		actionHolder.dispose()
	}

	private fun onMouseWheel(it: MouseWheel) {
		zoomAccumulated += it.wheel.clamp(-1.0, 1.0)
	}

	private fun dropMouse() {
		unlockCursor()
		rotation = false
		translation = false
		refreshActionListeners()
	}

	private fun onMouseDown(it: MouseDown) {
		if (it.button == settings.rotateButton) {
			lockCursor()
			rotation = true
			refreshActionListeners()
		} else if (it.button == settings.translateButton) {
			translation = true
			refreshActionListeners()
		}
	}

	private fun refreshActionListeners() {
		actionHolder.removeAllDisposable()
		if (rotation || translation) {
			inputDispatcher.onMouseMove.then(actionHolder, ::onMouseMove)
			inputDispatcher.onMouseUp.then(actionHolder, ::onMouseUp)
		}
	}

	private fun onMouseMove(it: MouseMove) {
		applyPointerMove(it.movement)
	}

	private fun applyPointerMove(movement: Vector2d) {
		val movementNormalized = normalizePointerMovement(movement)

		if (rotation) {
			val yaw = -movementNormalized.x * settings.yawSpeed
			val pitch = -movementNormalized.y * settings.pitchSpeed
			camera.rotate(yaw, pitch)
		}

		if (translation) {
			val forward = -movementNormalized.y * settings.translateSpeed
			val right = movementNormalized.x * settings.translateSpeed
			camera.translate(right, forward)
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

		refreshActionListeners()
	}


	private fun normalizePointerMovement(movement: Vector2d): Vector2d {
		val canvas = scene.getEngine().getRenderingCanvas()!!
		val viewportSize = Vector2d(canvas.width.toDouble(), canvas.height.toDouble())
		return movement / viewportSize
	}
}
