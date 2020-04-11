package casper.scene.camera.orbital

import BABYLON.Scene
import BABYLON.TargetCamera
import BABYLON.Vector3
import casper.core.Disposable
import casper.input.InputDispatcher
import casper.scene.camera.BabylonCamera
import casper.scene.core.PenetrationDetector

class SimpleOrbitalCamera(scene: Scene, inputDispatcher: InputDispatcher, inputSettings: OrbitalCameraInputSettings, penetrationDetector: PenetrationDetector?=null) : Disposable {
	val nativeCamera = createIdentityCamera(scene, "orbital-camera")
	val camera = BabylonCamera(nativeCamera)

	val orbitalController = OrbitalCameraController(camera, inputSettings.cameraSettings, penetrationDetector)
	val input = OrbitalCameraInput(scene, inputDispatcher, orbitalController, inputSettings)


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
