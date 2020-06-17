package casper.scene.camera.orbital

import casper.geometry.Vector2d
import casper.input.MouseButton


class OrbitalCameraInputSettings(
		val rotateEvent: (button: MouseButton, position: Vector2d) -> Boolean = { button, _ -> button == MouseButton.MIDDLE },
		val translateEvent: (button: MouseButton, position: Vector2d) -> Boolean = { button, _ -> button == MouseButton.RIGHT },

		val yawSpeed: Double = 10.0,
		val pitchSpeed: Double = 5.0,
		val zoomSpeed: Double = 20.0,
		val zoomSpeedFactor: Double = 0.25,
		val translateSpeed: Double = 1.0
)