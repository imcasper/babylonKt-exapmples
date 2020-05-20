package casper.util

import BABYLON.*
import casper.geometry.*
import casper.geometry.Quaternion
import casper.geometry.basis.Box3d
import casper.geometry.polygon.Line3d
import casper.math.clamp
import casper.types.Color3d
import casper.types.Color4d
import org.khronos.webgl.get
import kotlin.math.roundToInt

fun Matrix.toMatrix4d(): Matrix4d {
	return Matrix4d(DoubleArray(16) { m[it].toDouble() })
}

fun Matrix4d.toMatrix4(): Matrix {
	val m = Matrix()
	val floats = data.map { it.toFloat() }
	m.m.set(floats.toTypedArray())
	return m
}

fun Vector2i.toVector2(): Vector2 {
	return Vector2(x.toDouble(), y.toDouble())
}

fun Vector2d.toVector2(): Vector2 {
	return Vector2(this.x, this.y)
}

fun Vector2.toVector2d(): Vector2d {
	return Vector2d(this.x, this.y)
}

fun Vector2.roundToVector2i(): Vector2i {
	return Vector2i(x.roundToInt(), y.roundToInt())
}

fun Vector2.toVector2i(): Vector2i {
	return Vector2i(x.toInt(), y.toInt())
}

fun Vector3i.toVector3(): Vector3 {
	return Vector3(x.toDouble(), y.toDouble(), z.toDouble())
}

fun Vector3d.toVector3(): Vector3 {
	return Vector3(this.x, this.y, this.z)
}

fun Vector3.toVector3d(): Vector3d {
	return Vector3d(this.x, this.y, this.z)
}

fun Vector3.roundToVector3i(): Vector3i {
	return Vector3i(x.roundToInt(), y.roundToInt(), z.roundToInt())
}

fun Vector3.toVector3i(): Vector3i {
	return Vector3i(x.toInt(), y.toInt(), z.toInt())
}

fun Color3d.toColor3(): Color3 {
	return Color3(this.x, this.y, this.z)
}

fun Color4d.toColor4(): Color4 {
	return Color4(this.x, this.y, this.z, this.w)
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

fun AbstractMesh.getBoundingBox(): Box3d {
	return convertToBox(this.getBoundingInfo().boundingBox)
}

fun convertToBox(boundingBox: BoundingBox): Box3d {
	val minCorner = boundingBox.minimumWorld.toVector3d()
	val maxCorner = boundingBox.maximumWorld.toVector3d()
	return Box3d(minCorner, maxCorner)
}