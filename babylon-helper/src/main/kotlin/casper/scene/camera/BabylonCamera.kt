package casper.scene.camera

import BABYLON.FreeCamera
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.util.toVector3
import casper.util.toVector3d

class BabylonCamera(val camera: FreeCamera) : Camera {
	override var transform: Transform = Transform.fromYAxis(camera.position.toVector3d(), (camera.getTarget().toVector3d() - camera.position.toVector3d()).normalize(), camera.upVector.toVector3d().normalize())
		set(value) {
			field = value

			camera.position = value.position.toVector3()
			camera.setTarget((value.position + value.orientation.transform(Vector3d.Y)).toVector3())
			camera.upVector = value.orientation.transform(Vector3d.Z).toVector3()
		}

	override val source: BABYLON.Camera = camera

	override fun isActive(): Boolean {
		return camera.getScene().activeCamera == camera
	}

}