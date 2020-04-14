package casper.scene.camera.orbital

import BABYLON.EventState
import BABYLON.Scene
import casper.geometry.Vector3d
import casper.geometry.asSpherical
import casper.math.clamp
import kotlin.math.PI

class OrbitalSmoothController(val scene: Scene, val onState: (state: OrbitalCameraState) -> Unit) {
	var frictionFactor = 0.6
	var elasticityFactor = 0.6

	private var current: OrbitalCameraState? = null
	private var finish: OrbitalCameraState? = null

	private var speed1 = Vector3d.ZERO
	private var speed2 = Vector3d.ZERO

	init {
		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			update()
		})
	}

	private fun update() {
		val current = current ?: return
		val finish = finish ?: return

		val d1raw = finish.position.asVector3d() - current.position.asVector3d()
		val d1 = Vector3d(d1raw.x, prepareForInterpolate(d1raw.y), prepareForInterpolate(d1raw.z))
		val d2 = finish.pivot - current.pivot

		val elasticityFactor = elasticityFactor.clamp(0.0, 1.0)
		val frictionFactor = frictionFactor.clamp(0.0, 1.0)

		val acceleration1 = -speed1 * elasticityFactor + d1 * elasticityFactor * (1.0 - frictionFactor)
		val acceleration2 = -speed2 * elasticityFactor + d2 * elasticityFactor * (1.0 - frictionFactor)

		speed1 += acceleration1
		speed2 += acceleration2

		val next = OrbitalCameraState((current.position.asVector3d() + speed1).asSpherical(), current.pivot + speed2)
		this.current = next
		onState(next)
	}

	private fun prepareForInterpolate(factor: Double): Double {
		val step1 = factor % (2 * PI)
		val step2 = if (step1 < PI) step1 else (step1 - 2 * PI)
		return step2
	}

	fun setState(state: OrbitalCameraState) {
		if (current == null) {
			current = state
		}
		finish = state
	}
}
