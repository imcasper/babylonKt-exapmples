package casper.scene.camera

import BABYLON.Scene
import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.math.clamp
import casper.scene.core.TransformHolder
import kotlin.math.absoluteValue
import kotlin.math.sqrt

class PlainCameraController(val scene: Scene, val camera: TransformHolder, var plainNormal: Vector3d) {
	var pivot = Vector3d.ZERO

	fun translate(xFactor: Double, yFactor: Double) {
		camera.transform = translate(scene, camera.transform, pivot, xFactor, yFactor, plainNormal)
	}

	fun rotate(yaw: Double, pitch: Double) {
		camera.transform = rotateByAngle(camera.transform, pivot, yaw, plainNormal)
		camera.transform = rotateByAngle(camera.transform, pivot, pitch, camera.transform.getLocalX())
//		camera.transform = pitchTransform(camera.transform, pitch)
	}

	private fun pitchTransform(transform: Transform, pitch: Double): Transform {
		val lastPosition = camera.transform.position
		val lastForward = pivot - lastPosition

		val nextPosition = lastPosition + plainNormal * pitch * translateSpeedFactor
		val nextForward = pivot - nextPosition

		val rotation = Quaternion.getRotation(lastForward, nextForward).normalize()

		return Transform(nextPosition, rotation * transform.orientation)
	}

	val translateSpeedFactor: Double get() = sqrt((camera.transform.position.z - pivot.z).absoluteValue).clamp(0.1, 10.0)

	fun zoom(zFactor: Double) {
		camera.transform = distance(camera.transform, zFactor * translateSpeedFactor)
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