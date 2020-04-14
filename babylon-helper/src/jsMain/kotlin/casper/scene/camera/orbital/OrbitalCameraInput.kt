package casper.scene.camera.orbital

import BABYLON.EventState
import BABYLON.Scene
import casper.core.DisposableHolder
import casper.core.disposeAll
import casper.core.mutableDisposableListOf
import casper.geometry.Vector2d
import casper.input.*
import casper.math.clamp
import casper.platform.lockCursor
import casper.platform.unlockCursor
import casper.signal.util.then
import kotlin.browser.document
import kotlin.math.absoluteValue
import kotlin.math.max
import kotlin.math.min


/**
 * 	Действия пользователя преобразует в команды камере
 */
class OrbitalCameraInput(val scene: Scene, val inputDispatcher: InputDispatcher, val camera: OrbitalCameraController, val settings: OrbitalCameraInputSettings) : DisposableHolder() {
	private val actionComponents = mutableDisposableListOf()
	private var rotation = false
	private var translation = false


	init {
		inputDispatcher.onMouseWheel.then(components, ::onMouseWheel)
		inputDispatcher.onMouseDown.then(components, ::onMouseDown)

		document.addEventListener("mouseout", {
			dropMouse()
		})
	}

	override fun dispose() {
		super.dispose()
		actionComponents.disposeAll()
	}

	private fun onMouseWheel(it: MouseWheel) {
		val currentChange = it.wheel.clamp(-1.0, 1.0) * settings.zoomSpeed
		camera.zoom(currentChange)
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
		actionComponents.disposeAll()
		if (rotation || translation) {
			inputDispatcher.onMouseMove.then(actionComponents, ::onMouseMove)
			inputDispatcher.onMouseUp.then(actionComponents, ::onMouseUp)
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
