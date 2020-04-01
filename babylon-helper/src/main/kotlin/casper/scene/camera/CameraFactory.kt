package casper.scene.camera

import BABYLON.FreeCamera
import BABYLON.Ray
import BABYLON.Scene
import casper.geometry.Vector3d
import casper.input.InputDispatcher
import casper.scene.core.CollisionController
import casper.scene.core.SmoothController

fun createPlainCamera(scene: Scene, inputDispatcher: InputDispatcher, source: FreeCamera, settings: PlainCameraInputSettings, onTranslationPivot: (Ray) -> Vector3d?, onRotationPivot: (Ray) -> Vector3d?, getCollision: (Vector3d) -> Vector3d?): PlainCameraInput {
	val camera = BabylonCamera(source)

//	val smoothController = SmoothController(camera, scene, 5.0)
	val collisionController = CollisionController(camera, getCollision)
	val controller = PlainCameraController(scene, collisionController, Vector3d.Z)

	return PlainCameraInput(scene, inputDispatcher, controller, settings, onTranslationPivot, onRotationPivot)
}