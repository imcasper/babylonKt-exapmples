package casper.scene.camera

import BABYLON.Scene
import BABYLON.TargetCamera
import BABYLON.Vector3
import casper.core.Disposable
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.input.InputDispatcher
import casper.scene.core.CollisionController
import casper.scene.core.UpController

/**
 * 	@param getPivotPoint		поиск опорной для камеры точки (дается луч исходящий из камеры)
 * 	@param getPenetrationDepth - нормированная глубина проникновения отрезка в тело. Глубина считается от конца отрезка. Максимум -- 1.0 (на всю длину)
 */
class PlainCamera(scene: Scene, inputDispatcher: InputDispatcher, settings: PlainCameraInputSettings, getPivotPoint: (Line3d) -> Vector3d?, getPenetrationDepth: (Line3d) -> Vector3d?) : Disposable {
	val nativeCamera = createIdentityCamera(scene, "plain-camera")
	val camera = BabylonCamera(nativeCamera)

//	val smoothController =SmoothController(camera, scene)
//	val upController = TargetController(camera)
	val upController = UpController(camera)
	val collisionController = CollisionController(upController, getPenetrationDepth)
	val plainController = PlainCameraController(scene, collisionController, Vector3d.Z)
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
