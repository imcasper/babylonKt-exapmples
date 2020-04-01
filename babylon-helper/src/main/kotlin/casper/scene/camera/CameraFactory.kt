package casper.scene.camera

import BABYLON.FreeCamera
import BABYLON.Ray
import BABYLON.Scene
import casper.geometry.Vector3d
import casper.input.InputDispatcher
import casper.scene.core.CollisionController
import casper.scene.core.SmoothController
import casper.scene.core.TransformHolder

fun createPlainCamera(scene: Scene, inputDispatcher: InputDispatcher, source: FreeCamera, settings: PlainCameraInputSettings, getPivot: (Ray) -> Vector3d?, getCollision: (Vector3d) -> Vector3d?): PlainCameraInput {
	val camera = BabylonCamera(source)

	val smoothController = SmoothController(camera, scene)
	val collisionController = CollisionController(smoothController, getCollision)
	val controller = PlainCameraController(scene, collisionController, Vector3d.Z)

	return PlainCameraInput(scene, inputDispatcher, controller, settings, getPivot)
}