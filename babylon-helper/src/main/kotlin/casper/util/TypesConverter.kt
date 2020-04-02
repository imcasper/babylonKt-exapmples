package casper.util

import BABYLON.Color3
import BABYLON.Color4
import BABYLON.Ray
import BABYLON.Vector3
import casper.geometry.Quaternion
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.geometry.polygon.direction
import casper.geometry.polygon.length
import casper.math.clamp
import casper.types.Color3d
import casper.types.Color4d

fun Vector3d.toVector3(): Vector3 {
	return Vector3(this.x, this.y, this.z)
}

fun Color3d.toColor3(): Color3 {
	return Color3(this.x, this.y, this.z)
}

fun Color4d.toColor4(): Color4 {
	return Color4(this.x, this.y, this.z, this.w)
}

fun Vector3.toVector3d(): Vector3d {
	return Vector3d(this.x, this.y, this.z)
}

fun Vector3d.toView(): Vector3 {
	return Vector3(this.x, this.z, -this.y)
}

fun Ray.toLine(maxLength: Double): Line3d {
	return Line3d(origin.toVector3d(), direction.toVector3d() * length.clamp(0.0, maxLength))
}

fun Line3d.toRay(): Ray {
	val direction = (v1 - v0)
	val length = direction.length()
	val inv = if (length == 0.0) 0.0 else 1.0 / length
	return Ray(v0.toVector3(), (direction * inv).toVector3(), length)
}

fun Quaternion.toQuaternion(): BABYLON.Quaternion {
	return BABYLON.Quaternion(x, y, z, w)
}

fun BABYLON.Quaternion.toQuaternion(): Quaternion {
	return Quaternion(x, y, z, w)
}