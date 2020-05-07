package casper.scene.camera.orbital

import casper.core.Disposable
import casper.geometry.Transform

class SimpleOrbitalCamera(support: CameraSupport, val inputSettings: OrbitalCameraInputSettings, val cameraSettings: OrbitalCameraSettings, val onTransform: (Transform) -> Unit) : Disposable {
	//	val smoothController = SmoothController(camera, scene, 0.5)
	val orbitalSmooth = OrbitalSmoothController(support.nextFrameFuture) { setCamera(it) }
	val collisionResolver = OrbitalCollider(support.penetrationDetector) { orbitalSmooth.setState(it) }
	val orbitalController = OrbitalCameraController(cameraSettings) { collisionResolver.setState(it) }
	val input = OrbitalCameraInput(support, orbitalController, inputSettings)

	private fun setCamera(state: OrbitalCameraState) {
		val toCamera = state.position.fromSpherical()
		val cameraPosition = state.pivot + toCamera
//		val cameraPositionFinal = resolveCollision(cameraPosition)

		val nextTransform = Transform.fromYAxis(cameraPosition, state.pivot - cameraPosition, cameraSettings.plainNormal)
		if (nextTransform.isFinite()) {
			onTransform(nextTransform)
		}
	}

	override fun dispose() {
		input.dispose()
	}
}
