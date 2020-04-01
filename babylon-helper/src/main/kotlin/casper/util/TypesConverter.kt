package casper.util

import BABYLON.Color3
import BABYLON.Color4
import BABYLON.Ray
import BABYLON.Vector3
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
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
	val size = v1.length()
	return Ray(v0.toVector3(), (v1 / size).toVector3(), size)
}