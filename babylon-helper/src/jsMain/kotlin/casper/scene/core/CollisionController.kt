package casper.scene.core

import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.math.EPSILON

class CollisionController(val nextHolder: TransformHolder, val penetrationDetector: ContinuousPenetrationDetector) : TransformHolder {
	override var transform: Transform
		get() = nextHolder.transform
		set(target) {
			val last = transform
			val next = target


			val direction = Line3d(last.position,  next.position)
			val penetration = penetrationDetector(direction)

			if (penetration == null) {
				nextHolder.transform = next
			} else {
				if (!penetration.isFinite()) {
					throw Error("Invalid penetration: $penetration")
				}
				val resolvedPosition = next.position - penetration * (1.0 + EPSILON)
				nextHolder.transform = Transform( resolvedPosition, Vector3d.ONE, last.rotation)

//				val toLast = (last.position - resolvedPosition).length()
//				val toNext = (next.position - resolvedPosition).length()
//				val summary = toLast + toNext
//				if (summary < EPSILON) {
//					nextHolder.transform = last
//				} else {
//					val factor = toLast / summary
//
//					nextHolder.transform = Transform( resolvedPosition, interpolateQuaternion(last.orientation, next.orientation, factor))
//				}
//
			}
		}
}