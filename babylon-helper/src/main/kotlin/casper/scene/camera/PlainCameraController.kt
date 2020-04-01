package casper.scene.camera

import BABYLON.Scene
import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.math.clamp
import casper.scene.core.TransformHolder
import kotlin.math.absoluteValue
import kotlin.math.sqrt

class PlainCameraController(val scene: Scene, val camera: TransformHolder, val plainNormal: Vector3d) {
	fun translate(translationPivot: Vector3d, xFactor: Double, yFactor: Double) {
		camera.transform = translate(scene, camera.transform, translationPivot, xFactor, yFactor, plainNormal)
	}

	fun rotate(rotationPivot: Vector3d, yaw: Double, pitch: Double) {
		camera.transform = rotateByAngle(camera.transform, rotationPivot, yaw, plainNormal)
		camera.transform = rotateByAngle(camera.transform, rotationPivot, pitch, camera.transform.getLocalX())
	}

	fun zoom(zoomPivot: Vector3d?, zFactor: Double) {
		if (zoomPivot == null) {
			camera.transform = (distance(camera.transform, zFactor * 10.0))
			return
		}

		val zoomSpeedFactor = sqrt((camera.transform.position.z - zoomPivot.z).absoluteValue).clamp(0.1, 10.0)
		camera.transform = distance(camera.transform, zFactor * zoomSpeedFactor)
	}

	companion object {
		fun rotateByAngle(state: Transform, pivot: Vector3d, angle: Double, axis: Vector3d): Transform {
			val lastLook = pivot - state.position
			val rotation = Quaternion.fromAxisAnge(axis, angle)
			val nextLook = rotation.transform(lastLook)

			return Transform(state.position - (nextLook - lastLook), (Quaternion.fromAxisAnge(axis, angle) * state.orientation).normalize())
		}

		private fun distance(state: Transform, delta: Double): Transform {
			return Transform(state.position - state.getLocalY() * delta, state.orientation)
		}
//
//		private fun translate(state: Transform, pivot: Vector3d, moveX: Double, moveY: Double, fov: Double, aspect: Double): Transform {
//			val dest = (pivot - state.position).length()
//
//			val right = state.getRight() * dest * moveX * fov * aspect / 2.0
//			val up = state.getUp() * dest * moveY * fov / 2.0
//
//			return Transform(state.position - up - right, state.orientation)
//
//		}


		fun translate(scene: Scene, state: Transform, translationPivot: Vector3d, screenOffsetX: Double, screenOffsetY: Double, plainNormal: Vector3d): Transform {
			val fov = scene.activeCamera!!.fov
			val aspect = scene.getEngine().getRenderWidth() / scene.getEngine().getRenderHeight()
			return translate(state, translationPivot, screenOffsetX, screenOffsetY, plainNormal, fov, aspect)
		}

		private fun translate(state: Transform, pivot: Vector3d, screenOffsetX: Double, screenOffsetY: Double, normal: Vector3d, fov: Double, aspect: Double): Transform {
			val dest = (pivot - state.position).length()

			val rightDir = state.getLocalX().normalize()
			val forwardNormalized = normal.cross(rightDir).normalize()

			val right = rightDir * dest * screenOffsetX * fov * aspect
			val forward = forwardNormalized * dest * screenOffsetY * fov

			val offset = -(right + forward)

			return Transform(state.position + offset, state.orientation)
		}

	}
}