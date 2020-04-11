package casper.scene.camera.plain

import BABYLON.Scene
import BABYLON.TargetCamera
import BABYLON.Vector3
import casper.core.Disposable
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.input.InputDispatcher
import casper.scene.camera.BabylonCamera
import casper.scene.core.CollisionController
import casper.scene.core.ContinuousPenetrationDetector
import casper.scene.core.UpController

/**
 * 	@param getPivotPoint        поиск опорной точки для камеры  (дается луч исходящий из камеры)
 * 	@param penetrationDetector - Вектор проникновения отрезка в тело (куда двигать камеру, чтобы избежать проникновения)
 */
class PlainCamera(scene: Scene, inputDispatcher: InputDispatcher, settings: PlainCameraInputSettings, getPivotPoint: (Line3d) -> Vector3d?, penetrationDetector: ContinuousPenetrationDetector) : Disposable {
	val nativeCamera = createIdentityCamera(scene, "plain-camera")
	val camera = BabylonCamera(nativeCamera)

	//	val smoothController =SmoothController(camera, scene)
//	val upController = TargetController(camera)
	val collisionController = CollisionController(camera, penetrationDetector)
	val upController = UpController(collisionController)
	val plainController = PlainCameraController(scene, upController, Vector3d.Z)
	val input = PlainCameraInput(scene, inputDispatcher, plainController, settings, getPivotPoint)


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
