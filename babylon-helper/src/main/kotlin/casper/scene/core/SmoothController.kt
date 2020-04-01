package casper.scene.core

import BABYLON.EventState
import BABYLON.Scene
import casper.geometry.Transform
import casper.geometry.interpolateQuaternion
import casper.math.clamp
import kotlin.math.absoluteValue
import kotlin.math.sqrt

class SmoothController(val camera: TransformHolder, val scene: Scene, val speed: Double = 50.0) : TransformHolder {
	private var start: Transform = camera.transform
	private var finish: Transform = start
	private var timeFactor = 0.0
	private var duration = 0.0

	override var transform: Transform
		get() = finish
		set(target) {

			val cos = finish.orientation.dot(start.orientation)
			if (cos > 0.999) {
				start = camera.transform
				finish = target
				timeFactor = 0.0
				duration = 1.0
			} else {
				start = target
				finish = target
				duration = 1.0
				timeFactor = 1.0
			}

			if (!start.isValid()) {
				start = finish
			}
		}

	init {
		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			update(scene.deltaTime * 0.001)
		})
	}

	private fun update(deltaTime: Double) {
		timeFactor = (timeFactor + deltaTime / duration).clamp(0.0, 1.0)
//		val scaleFactor = (1.0 - cos(timeFactor * PI)) / 2.0
		camera.transform = interpolateTransform(start, finish, timeFactor)
	}

	private fun interpolateTransform(A: Transform, B: Transform, factor: Double): Transform {
		val pos = A.position * (1.0 - factor) + B.position * factor
		val Q = interpolateQuaternion(A.orientation, B.orientation, factor)
		return Transform(pos, Q)
	}
}