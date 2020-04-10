package casper.scene.camera.orbital

import casper.input.MouseButton


class OrbitalCameraInputSettings(
		val cameraSettings: OrbitalCameraSettings = OrbitalCameraSettings(),
		val rotateButton: MouseButton = MouseButton.MIDDLE,
		val translateButton: MouseButton = MouseButton.RIGHT,

		val yawSpeed: Double = 10.0,
		val pitchSpeed: Double = 5.0,
		val zoomSpeed: Double = 20.0,
		val zoomSpeedFactor : Double = 0.25,
		val translateSpeed: Double = 5.0
)