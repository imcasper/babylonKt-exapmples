package casper.scene.camera.orbital

import BABYLON.Scene
import casper.geometry.Vector3d
import casper.geometry.toSpherical
import casper.math.EPSILON
import casper.scene.core.PenetrationDetector

class OrbitalCollider(val penetrationDetector: PenetrationDetector?, val onState: (OrbitalCameraState) -> Unit) {

	private fun resolveCollision(cameraPosition: Vector3d): Vector3d {
		val penetrationDetectorCurrent = penetrationDetector
		if (penetrationDetectorCurrent != null) {
			val penetration = penetrationDetectorCurrent(cameraPosition)
			if (penetration != null) {
				return cameraPosition - penetration * (1.0 + EPSILON)
			}
		}
		return cameraPosition
	}

	fun setState(state: OrbitalCameraState) {
		val toCamera = state.position.fromSpherical()
		val cameraPosition = state.pivot + toCamera
		val cameraPositionFinal = resolveCollision(cameraPosition)
		val toCameraFinal = cameraPositionFinal - state.pivot

		onState(OrbitalCameraState(toCameraFinal.toSpherical(), state.pivot))
	}
}
