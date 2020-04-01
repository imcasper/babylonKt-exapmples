package casper.scene.core

import BABYLON.EventState
import BABYLON.Scene
import casper.geometry.Transform
import casper.geometry.interpolateQuaternion

class SmoothController(val holder: TransformHolder, val scene: Scene) : TransformHolder {
	private var next: Transform = holder.transform

	override var transform: Transform
		get() = next
		set(target) {
			next = target
		}

	init {
		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			update()
		})
	}

	private fun update() {
		if (!holder.transform.isValid()) {
			holder.transform = next
		} else {
			holder.transform = interpolateTransform(holder.transform, next, 0.5)
		}
	}

	private fun interpolateTransform(A: Transform, B: Transform, factor: Double): Transform {
		val pos = A.position * (1.0 - factor) + B.position * factor
		val Q = interpolateQuaternion(A.orientation, B.orientation, factor)
		return Transform(pos, Q)
	}
}