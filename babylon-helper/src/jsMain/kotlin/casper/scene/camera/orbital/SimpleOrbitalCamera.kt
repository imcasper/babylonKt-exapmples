package casper.scene.camera.orbital

import BABYLON.Scene
import BABYLON.TargetCamera
import BABYLON.Vector3
import casper.core.Disposable
import casper.format.toPrecision
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.input.InputDispatcher
import casper.math.EPSILON
import casper.scene.camera.BabylonCamera
import casper.scene.core.PenetrationDetector

class SimpleOrbitalCamera(scene: Scene, inputDispatcher: InputDispatcher, val inputSettings: OrbitalCameraInputSettings, val penetrationDetector: PenetrationDetector? = null) : Disposable {
	val nativeCamera = createIdentityCamera(scene, "orbital-camera")
	val camera = BabylonCamera(nativeCamera)

	//	val smoothController = SmoothController(camera, scene, 0.5)
	val orbitalSmooth = OrbitalSmoothController(scene) { setCamera(it) }
	val collisionResolver = OrbitalCollider(penetrationDetector){ orbitalSmooth.setState(it) }
	val orbitalController = OrbitalCameraController(inputSettings.cameraSettings) { collisionResolver.setState(it) }
	val input = OrbitalCameraInput(scene, inputDispatcher, orbitalController, inputSettings)


	init {
		inputDispatcher.onKeyDown.then {
			println(it.button.code)
			if (it.button.code == 38) {
				orbitalSmooth.elasticityFactor += 0.05
				println("factor: ${orbitalSmooth.elasticityFactor.toPrecision(2)}")
			}
			if (it.button.code == 40) {
				orbitalSmooth.elasticityFactor -= 0.05
				println("factor: ${orbitalSmooth.elasticityFactor.toPrecision(2)}")
			}
			if (it.button.code == 37) {
				orbitalSmooth.frictionFactor += 0.05
				println("friction: ${orbitalSmooth.frictionFactor.toPrecision(2)}")
			}
			if (it.button.code == 39) {
				orbitalSmooth.frictionFactor -= 0.05
				println("friction: ${orbitalSmooth.frictionFactor.toPrecision(2)}")
			}
		}
	}

	private fun setCamera(state: OrbitalCameraState) {
		val toCamera = state.position.fromSpherical()
		val cameraPosition = state.pivot + toCamera
//		val cameraPositionFinal = resolveCollision(cameraPosition)

		val nextTransform = Transform.fromYAxis(cameraPosition, state.pivot - cameraPosition, inputSettings.cameraSettings.plainNormal)
		if (nextTransform.isFinite()) {
			camera.transform = nextTransform
		}
	}

	override fun dispose() {
		nativeCamera.dispose()
		input.dispose()
	}

	companion object {
		fun createIdentityCamera(scene: Scene, name: String): TargetCamera {
			val camera = TargetCamera(name, Vector3.Zero(), scene)
			camera.setTarget(Vector3(0.0, 1.0, 0.0))
			camera.upVector = Vector3(0.0, 0.0, 1.0)
			camera.getViewMatrix()
			return camera
		}
	}
}
