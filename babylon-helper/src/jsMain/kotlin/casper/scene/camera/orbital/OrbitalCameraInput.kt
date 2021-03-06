package casper.scene.camera.orbital

import casper.core.DisposableHolder
import casper.core.disposeAll
import casper.core.mutableDisposableListOf
import casper.geometry.Vector2d
import casper.input.MouseDown
import casper.input.MouseMove
import casper.input.MouseUp
import casper.input.MouseWheel
import casper.math.clamp
import casper.platform.lockCursor
import casper.platform.unlockCursor
import casper.signal.util.then
import kotlin.browser.document


/**
 * 	Действия пользователя преобразует в команды камере
 */
class OrbitalCameraInput(val support: CameraSupport, val camera: OrbitalCameraController, val settings: OrbitalCameraInputSettings) : DisposableHolder() {
	private val actionComponents = mutableDisposableListOf()
	private var rotation = false
	private var translation = false


	init {
		support.inputDispatcher.onMouseWheel.then(components, ::onMouseWheel)
		support.inputDispatcher.onMouseDown.then(components, ::onMouseDown)

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
		if (rotation || translation) return

		if (settings.rotateEvent(it.button, it.position)) {
			lockCursor()
			rotation = true
			refreshActionListeners()
		} else if (settings.translateEvent(it.button, it.position)) {
			lockCursor()
			translation = true
			refreshActionListeners()
		}
	}

	private fun refreshActionListeners() {
		actionComponents.disposeAll()
		if (rotation || translation) {
			support.inputDispatcher.onMouseMove.then(actionComponents, ::onMouseMove)
			support.inputDispatcher.onMouseUp.then(actionComponents, ::onMouseUp)
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

		if (settings.rotateEvent(it.button, it.position)) {
			unlockCursor()
			rotation = false
			translation = false
		}
		if (settings.translateEvent(it.button, it.position)) {
			unlockCursor()
			rotation = false
			translation = false
		}

		refreshActionListeners()
	}


	private fun normalizePointerMovement(movement: Vector2d): Vector2d {
		return movement / support.onViewportSize().toVector2d()
	}
}
