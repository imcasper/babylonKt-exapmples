package casper.scene.core

import BABYLON.EventState
import BABYLON.Scene
import casper.geometry.Transform
import casper.geometry.interpolateTransform

class SmoothController(val nextHolder: TransformHolder, val scene: Scene, val baseDuration: Double = 0.5) : TransformHolder {
	private var start: Transform = nextHolder.transform
	private var finish: Transform = start
	private var timeFactor = Double.NaN
	private var duration = 0.0

	override var transform: Transform
		get() = finish
		set(target) {
			val last = nextHolder.transform
			start = if (last.isFinite()) last else target
			finish = target
		}

	init {
		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			update(scene.deltaTime * 0.001)
		})
	}

	private fun update(deltaTime: Double) {
		nextHolder.transform = interpolateTransform(start, finish, 0.5)
		start = nextHolder.transform
	}
}