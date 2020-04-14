package casper.scene.camera.orbital

import casper.geometry.SphericalCoordinate
import casper.geometry.Vector3d
import casper.math.clamp
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin

class OrbitalCameraState(
		val position: SphericalCoordinate,
		val pivot: Vector3d
)

class OrbitalCameraController(var settings: OrbitalCameraSettings, val onState: (OrbitalCameraState) -> Unit) {
	private var position = SphericalCoordinate(100.0, PI / 4.0, 0.0)
	private var pivot = Vector3d.ZERO

	init {
		dispatchState()
	}

	fun getPosition():SphericalCoordinate {
		return position
	}

	fun getPivot():Vector3d {
		return pivot
	}

	fun setPosition(value: SphericalCoordinate) {
		position = SphericalCoordinate(value.range.clamp(settings.minRange, settings.maxRange), value.verticalAngle.clamp(settings.minVerticalAngle, settings.maxVerticalAngle), value.horizontalAngle)
		dispatchState()
	}

	fun setPivot(value: Vector3d) {
		pivot = value.clamp(settings.pivotBox.min, settings.pivotBox.max)
		dispatchState()
	}

	fun zoom(value: Double) {
		setPosition(SphericalCoordinate(position.range + value, position.verticalAngle, position.horizontalAngle))
	}

	fun translate(right: Double, forward: Double) {
		val rangeFactor = 1.0 + position.range

		val cos = cos(position.horizontalAngle)
		val sin = sin(position.horizontalAngle)
		val offset = Vector3d(forward * cos + right * sin, forward * sin - right * cos, 0.0)
		setPivot(pivot + offset * rangeFactor)
	}

	fun rotate(yaw: Double, pitch: Double) {
		setPosition(SphericalCoordinate(position.range, position.verticalAngle + pitch, position.horizontalAngle + yaw))
	}

	private fun dispatchState() {
		onState(OrbitalCameraState(position, pivot))
	}

}