package casper.scene.core

import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.getRotation
import casper.geometry.interpolateQuaternion
import casper.geometry.polygon.Line3d
import casper.math.EPSILON

class CollisionController(val nextHolder: TransformHolder, val getPenetrationDepth: (Line3d) -> Vector3d?) : TransformHolder {
	override var transform: Transform
		get() = nextHolder.transform
		set(target) {
			val last = transform
			val next = target
			val penetrationPoint = getPenetrationDepth(Line3d(last.position, next.position))

			if (penetrationPoint == null) {
				nextHolder.transform = next
			} else {
//				val factor = (penetration + EPSILON).clamp(0.0, 1.0)
				val A = (last.position - penetrationPoint).length()
				val B = (next.position - penetrationPoint).length()
				val d = A + B
				if (d < EPSILON) {
					nextHolder.transform = last
				} else {
					val factor = A / (A+B)
					println("A=$A; B=$B; factor=$factor; ${penetrationPoint.toPrecision(2)}")

					getRotation(last.position, penetrationPoint)

					nextHolder.transform = Transform( penetrationPoint, interpolateQuaternion(last.orientation, next.orientation, factor))
				}
			}
		}
}