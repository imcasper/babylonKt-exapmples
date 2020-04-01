package casper.scene.core

import casper.geometry.Transform
import casper.geometry.Vector3d

class CollisionController(val camera: TransformHolder, val getCollision: (Vector3d) -> Vector3d?) : TransformHolder {
	override var transform: Transform
		get() = camera.transform
		set(target) {
			val last = camera.transform
			val next = target
			val lastCollision = getCollision(last.position) != null
			val nextCollision = getCollision(next.position) != null
			if (lastCollision || !nextCollision) {
				camera.transform = next
			}
		}
}