package casper.util

import BABYLON.Scene
import casper.collection.map.MapUtil
import casper.geometry.Vector2i
import casper.geometry.basis.Box2i
import casper.render.material.CubeTextureReference
import casper.types.Bitmap

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
fun createCubeTextureFromPlane(bitmap: Bitmap, name: String): CubeTextureReference {
	val size = bitmap.height / 3
	if (bitmap.width != size * 4 || bitmap.height != size * 3) {
		throw Error("Non-compatible texture size")
	}

	/*nx*/
	val nx = MapUtil.rotate90CW(MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(0, size), Vector2i(size))))

	/*py*/
	val py = MapUtil.rotate180CW(MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(size, size), Vector2i(size))))

	/*px*/
	val px = MapUtil.rotate90CCW(MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(size * 2, size), Vector2i(size))))

	/*ny*/
	val ny = MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(size * 3, size), Vector2i(size)))

	/*pz*/
	val pz = MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(size, 0), Vector2i(size)))

	/*nz*/
	val nz = MapUtil.rotate180CCW(MapUtil.takeRegion(bitmap, Box2i.byDimension(Vector2i(size, size * 2), Vector2i(size))))

	return CubeTextureReference(casper.render.material.CubeTexture(px, nx, py, ny, pz, nz), name)
}
