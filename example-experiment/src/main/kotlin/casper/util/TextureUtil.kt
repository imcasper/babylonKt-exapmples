package casper.util

import BABYLON.Constants
import BABYLON.RawCubeTexture
import BABYLON.Scene
import casper.collection.map.IntMap2d
import casper.collection.map.MapUtil
import casper.geometry.Vector2i
import casper.geometry.aabb.AABBox2i
import casper.types.Bitmap
import casper.types.ColorUtil
import org.khronos.webgl.ArrayBufferView
import org.khronos.webgl.Float32Array
import org.khronos.webgl.Int32Array
import org.khronos.webgl.Uint8Array

/**
 * 	Make cube texture from planar (4x3):
 *
 * 	░░░░▓▓▓▓░░░░░░░░
 * 	░░░░▓PZ▓░░░░░░░░
 * 	░░░░▓▓▓▓░░░░░░░░
 *     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 *     ▓NX▓▓PY▓▓PX▓▓NY▓
 *     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
 * 	░░░░▓▓▓▓░░░░░░░░
 * 	░░░░▓NZ▓░░░░░░░░
 * 	░░░░▓▓▓▓░░░░░░░░
 *
 */
fun createCubeTextureFromPlane(scene: Scene, bitmap: Bitmap, name: String): RawCubeTexture {
	val size = bitmap.height / 3
	if (bitmap.width != size * 4 || bitmap.height != size * 3) {
		throw Error("Non-compatible texture size")
	}

	/*nx*/
	val nx = MapUtil.rotate90CW(MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(0, size), Vector2i(size))))

	/*py*/
	val py = MapUtil.rotate180CW(MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(size, size), Vector2i(size))))

	/*px*/
	val px = MapUtil.rotate90CCW(MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(size * 2, size), Vector2i(size))))

	/*ny*/
	val ny = MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(size * 3, size), Vector2i(size)))

	/*pz*/
	val pz = MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(size, 0), Vector2i(size)))

	/*nz*/
	val nz = MapUtil.rotate180CCW(MapUtil.takeRegion(bitmap, AABBox2i(Vector2i(size, size * 2), Vector2i(size))))

	val converter: (IntMap2d) -> ArrayBufferView = ::asJsBytes
	val items = arrayOf(converter(nx), converter(px), converter(ny), converter(py), converter(nz), converter(pz))

	val texture = RawCubeTexture(scene, items, size.toDouble(), format = Constants.TEXTUREFORMAT_RGBA.toDouble(), invertY = false, generateMipMaps = true, type = Constants.TEXTURETYPE_UNSIGNED_BYTE.toDouble())
	texture.lodGenerationScale = 0.8
	texture.name = name
	return texture
}

fun asJsBytes(map: IntMap2d): Uint8Array {
	return Uint8Array((map.array as Int32Array).buffer)
}

fun colorAs4Float(map: IntMap2d): Float32Array {
	val size = map.width * map.height * 4
	val float = Array<Float>(size) {
		val source = map.array[it / 4]
		var red = ColorUtil.decodeComponentAsDouble(it % 4, source)
		if (it % 4 != 3) red *= 1.0
		red.toFloat()
	}
	val f = Float32Array(float)
	return f
}
