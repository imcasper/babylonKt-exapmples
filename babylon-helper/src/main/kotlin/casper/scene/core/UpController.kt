package casper.scene.core

import casper.format.toPrecision
import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.interpolateTransform
import casper.math.EPSILON
import casper.math.clamp
import kotlin.math.PI

class UpController(val nextHolder: TransformHolder, val minAngle: Double = -PI * 0.55, val maxAngle: Double = PI * 0.55, val preferredUp: Vector3d = Vector3d.Z) : TransformHolder {
	init {
		if (minAngle >= maxAngle) {
			throw Error("minangle=${minAngle.toPrecision(2)} must be smaller than maxangle=${maxAngle.toPrecision(2)}")
		}
	}

	override var transform: Transform
		get() = nextHolder.transform
		set(target) {
			val last = transform
			val next = target

			val lastAngle = Quaternion.getAngle(last.getLocalZ(), preferredUp)
			val nextAngle = Quaternion.getAngle(next.getLocalZ(), preferredUp)

			val lastToMax = lastAngle - maxAngle
			val nextToMax = nextAngle - maxAngle

			val lastToMin = minAngle - lastAngle
			val nextToMin = minAngle - nextAngle

			if (nextToMin <= 0.0 && nextToMax <= 0.0) {
				nextHolder.transform = next
			} else if (nextToMax > 0.0 && nextToMin > 0.0) {
				nextHolder.transform = next
			} else if (nextToMax > 0.0) {
				val factor = (nextToMax / (nextToMax - lastToMax) + EPSILON).clamp(0.0, 1.0)
				nextHolder.transform = interpolateTransform(next, last, factor)
			} else {
				val factor = (nextToMin / (nextToMin - lastToMin) + EPSILON).clamp(0.0, 1.0)
				nextHolder.transform = interpolateTransform(next, last, factor)
			}
		}
}