package casper.scene.core

import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.interpolateQuaternion
import kotlin.math.max
import kotlin.math.roundToInt

class CollisionController(val holder: TransformHolder, val getCollision: (Vector3d) -> Vector3d?, val precision: Double = 0.1) : TransformHolder {
	override var transform: Transform
		get() = holder.transform
		set(target) {
			val lastAcceptedTransform = getAcceptedTransform(transform, target)
			holder.transform = lastAcceptedTransform ?: target
		}

	private fun getAcceptedTransform(source: Transform, target: Transform): Transform? {
		var lastAcceptedTransform: Transform? = null
		val maxStep = max(1, ((source.position - target.position).length() / precision).roundToInt())
		for (step in 0..maxStep) {
			val V = (step.toDouble() / maxStep.toDouble())
			val W = 1.0 - V
			val nextPosition = source.position * W + target.position * V
			val nextOrientation = interpolateQuaternion(source.orientation, target.orientation, V)
			val nextTransform = Transform(nextPosition, nextOrientation)

			val hasCollision = getCollision(nextTransform.position) != null
			if (!hasCollision) {
				lastAcceptedTransform = nextTransform
			} else {
				break
			}
		}
		return lastAcceptedTransform
	}
}