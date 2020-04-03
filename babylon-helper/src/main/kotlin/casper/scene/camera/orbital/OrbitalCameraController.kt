package casper.scene.camera.orbital

import casper.geometry.SphericalCoordinate
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.getProjection
import casper.math.EPSILON
import casper.math.clamp
import casper.scene.camera.Camera
import casper.scene.core.PenetrationDetector
import kotlin.math.PI

class OrbitalCameraController(val camera: Camera, var settings:OrbitalCameraSettings, var penetrationDetector: PenetrationDetector?) {
	private var position = SphericalCoordinate(100.0, PI / 4.0, 0.0)
	private var pivot = Vector3d.ZERO

	init {
		updateCameraTransform()
	}

	fun getPosition():SphericalCoordinate {
		return position
	}

	fun getPivot():Vector3d {
		return pivot
	}

	fun setPosition(value:SphericalCoordinate) {
		position = SphericalCoordinate(value.range.clamp(settings.minRange, settings.maxRange), value.verticalAngle.clamp(settings.minVerticalAngle, settings.maxVerticalAngle), value.horizontalAngle)
		updateCameraTransform()
	}

	fun setPivot(value:Vector3d) {
		pivot = value.clamp(settings.pivotBox.min, settings.pivotBox.max)
		updateCameraTransform()
	}

	fun zoom(value: Double) {
		setPosition(SphericalCoordinate(position.range + value, position.verticalAngle, position.horizontalAngle))
	}

	fun translate(right: Double, forward: Double) {
		val forwardProjection = getProjectionOnPlaneX(Vector3d.X, Vector3d.Y, camera.transform.getLocalY())
		val rightProjection = getProjectionOnPlaneX(Vector3d.X, Vector3d.Y, camera.transform.getLocalX())

		setPivot(pivot - (forwardProjection * forward + rightProjection * right) * 100.0)
	}

	fun rotate(yaw: Double, pitch: Double) {
		setPosition(SphericalCoordinate(position.range, position.verticalAngle + pitch, position.horizontalAngle + yaw))
	}

	private fun getProjectionOnPlaneX(basis1: Vector3d, basis2: Vector3d, value: Vector3d):Vector3d {
		val value1 = getProjection(basis1, value)
		val value2 = getProjection(basis2, value)
		return value1 + value2
	}


	private fun updateCameraTransform() {
		val toCamera = position.fromSpherical()
		val cameraPosition = pivot + toCamera
		val cameraPositionFinal = resolveCollision(cameraPosition)

		val nextTransform = Transform.fromYAxis(cameraPositionFinal, pivot - cameraPositionFinal, settings.plainNormal)
		if (nextTransform.isFinite()) {
			camera.transform = nextTransform
		}
	}

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
}