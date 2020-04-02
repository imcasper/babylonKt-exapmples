package casper.scene.core

import casper.geometry.Transform
import casper.geometry.interpolateTransform
import casper.geometry.polygon.Line3d
import casper.math.EPSILON
import casper.math.clamp

class CollisionController(val nextHolder: TransformHolder, val getPenetrationDepth: (Line3d) -> Double?) : TransformHolder {
	override var transform: Transform
		get() = nextHolder.transform
		set(target) {
			val last = transform
			val next = target
			val depth = getPenetrationDepth(Line3d(last.position, next.position))

			if (depth == null || depth >= 1.0) {
				nextHolder.transform = next
			} else {
				val factor = (depth + EPSILON).clamp(0.0, 1.0)
				nextHolder.transform = interpolateTransform(next, last, factor)
			}
		}
}