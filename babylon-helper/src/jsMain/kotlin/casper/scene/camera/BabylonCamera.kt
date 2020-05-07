package casper.scene.camera

import BABYLON.TargetCamera
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.util.toVector3
import casper.util.toVector3d

class BabylonCamera(val camera: TargetCamera) : Camera {
	override var transform = Transform.IDENTITY
		set(value) {
			if (!transform.isFinite()) {
				throw Error("Invalid transform: $transform")
			}
			field = value

			camera.position = value.position.toVector3()
			camera.setTarget((value.position + value.rotation.transform(Vector3d.Y)).toVector3())
			camera.upVector = value.rotation.transform(Vector3d.Z).toVector3()
		}

	init {
		Transform.fromYAxis(camera.position.toVector3d(), (camera.getTarget().toVector3d() - camera.position.toVector3d()).normalize(), camera.upVector.toVector3d())
	}

	override val source: BABYLON.Camera = camera

	override fun isActive(): Boolean {
		return camera.getScene().activeCamera == camera
	}

}