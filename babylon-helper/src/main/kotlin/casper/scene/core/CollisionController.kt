package casper.scene.core

import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.interpolateQuaternion
import casper.math.EPSILON

class CollisionController(val nextHolder: TransformHolder, val getPenetrationResolver: (Vector3d) -> Vector3d?) : TransformHolder {
	override var transform: Transform
		get() = nextHolder.transform
		set(target) {
			val last = transform
			val next = target
			val penetration = getPenetrationResolver(next.position)

			if (penetration == null) {
				nextHolder.transform = next
			} else {
				val resolvePosition = next.position + penetration * (1.0 + EPSILON)

				val toLast = (last.position - resolvePosition).length()
				val toNext = (next.position - resolvePosition).length()
				val summary = toLast + toNext
				if (summary < EPSILON) {
					nextHolder.transform = last
				} else {
					val factor = toLast / summary

					nextHolder.transform = Transform( resolvePosition, interpolateQuaternion(last.orientation, next.orientation, factor))
				}
			}
		}
}