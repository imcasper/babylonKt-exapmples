package casper.app

import BABYLON.EventState
import BABYLON.Scene
import BABYLON.Vector3
import casper.util.Transform
import kotlin.math.abs

class MeshMover(val transform: Transform, val velocity: Vector3, var frames:Int) {
	private val slot = transform.instance.getScene().onBeforeRenderObservable.add(::update)

	init {
		transform.scaling.set(0.01, 0.01, 0.01)
	}

	fun update(s: Scene, e: EventState) {
		if (--frames <= 0) {
			dispose()
			return
		}

		val position = transform.position
		position.x += velocity.x
		position.y += velocity.y
		position.z += velocity.z
		if (position.x > 1.0) {
			velocity.x = -abs(velocity.x)
		}
		if (position.x < -1.0) {
			velocity.x = abs(velocity.x)
		}

		if (position.y > 1.0) {
			velocity.y = -abs(velocity.y)
		}
		if (position.y < -1.0) {
			velocity.y = abs(velocity.y)
		}

		if (position.z > 1.0) {
			velocity.z = -abs(velocity.z)
		}
		if (position.z < -1.0) {
			velocity.z = abs(velocity.z)
		}
		transform.update()
	}

	private var isDisposed = false

	private fun dispose() {
		if (isDisposed) return
		isDisposed = true
		
		transform.instance.getScene().onBeforeRenderObservable.remove(slot)
		transform.dispose()
	}
}