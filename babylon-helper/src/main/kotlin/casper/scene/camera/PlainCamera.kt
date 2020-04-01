package casper.scene.camera

import BABYLON.FreeCamera
import BABYLON.Scene
import BABYLON.Vector3
import casper.core.Disposable
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.input.InputDispatcher
import casper.scene.core.CollisionController

class PlainCamera(scene: Scene, inputDispatcher: InputDispatcher, settings: PlainCameraInputSettings, onPivot: (Line3d) -> Vector3d?, getCollision: (Vector3d) -> Vector3d?) : Disposable{
	val source = FreeCamera("plain-camera", Vector3.Zero(), scene)
	val camera = BabylonCamera(source)

	//	val smoothController = SmoothController(camera, scene, 5.0)
	val collisionController = CollisionController(camera, getCollision)
	val plainController = PlainCameraController(scene, collisionController, Vector3d.Z)
	val input = PlainCameraInput(scene, inputDispatcher, plainController, settings, onPivot)

	override fun dispose() {
		source.dispose()
		input.dispose()
	}
}
