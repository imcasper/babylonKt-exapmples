package casper.scene.camera.orbital

import casper.geometry.Vector3d
import casper.geometry.basis.Box3d
import kotlin.math.PI

class OrbitalCameraSettings(
		val minVerticalAngle: Double = 0.05,
		val maxVerticalAngle: Double = 0.95 * PI,
		val minRange: Double = 1.0,
		val maxRange: Double = 1000.0,
		val pivotBox:Box3d = Box3d(Vector3d(Double.MIN_VALUE), Vector3d(Double.MAX_VALUE)),
		val plainNormal: Vector3d = Vector3d.Z) {
	init {
		if (!(minVerticalAngle < maxVerticalAngle)) {
			throw Error("Invalid angles: minVerticalAngle=$minVerticalAngle must smaller than maxVerticalAngle=$maxVerticalAngle")
		}
		if (!(minRange < maxRange)) {
			throw Error("Invalid angles: minRange=$minRange must smaller than maxRange=$maxRange")
		}
	}
}