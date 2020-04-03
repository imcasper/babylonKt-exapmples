package casper.scene.camera.plain

import casper.input.MouseButton


class PlainCameraInputSettings(
		val rotateButton: MouseButton = MouseButton.MIDDLE,
		val translateButton: MouseButton = MouseButton.RIGHT,

		val yawSpeed: Double = 10.0,
		val pitchSpeed: Double = 5.0,
		val zoomSpeed: Double = 2.0
)