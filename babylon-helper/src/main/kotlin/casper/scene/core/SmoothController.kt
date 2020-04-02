package casper.scene.core

import BABYLON.EventState
import BABYLON.Scene
import casper.geometry.Transform
import casper.geometry.interpolateTransform
import casper.math.clamp
import kotlin.math.PI
import kotlin.math.cos

class SmoothController(val nextHolder: TransformHolder, val scene: Scene, val baseDuration: Double = 0.5) : TransformHolder {
	private var start: Transform = nextHolder.transform
	private var finish: Transform = start
	private var timeFactor = Double.NaN
	private var duration = 0.0

	override var transform: Transform
		get() = finish
		set(target) {
			val last = nextHolder.transform
			start = if (last.isValid()) last else target
			finish = target

			if (!timeFactor.isFinite()) {
				duration = baseDuration
				timeFactor = 0.0
			} else {
				duration =baseDuration - timeFactor * baseDuration
				timeFactor = 0.0
			}
		}

	init {
		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			update(scene.deltaTime * 0.001)
		})
	}

	private fun update(deltaTime: Double) {
		if (!timeFactor.isFinite()) return

		timeFactor = (timeFactor + deltaTime / duration).clamp(0.0, 1.0)
		val scaleFactor = (1.0 - cos(timeFactor * PI)) / 2.0

		nextHolder.transform = interpolateTransform(start, finish, scaleFactor)

		if (timeFactor >= 1.0) timeFactor = Double.NaN
	}
}