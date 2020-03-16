package casper.model

import BABYLON.*
import casper.util.atlas.Atlas
import casper.util.atlas.AtlasPage

typealias UVConverter = (Vector2) -> (Vector2)

class UVReplacer {
	companion object {

		fun create(atlas: Atlas, imageName: String):Pair<AtlasPage, UVConverter> {
			val (page, region) = atlas.getRegion(imageName) ?: throw Error("Undefined region: $imageName in $atlas")

			val pageSize = page.info.size
			val box = region.box

			val atlasWidth = pageSize.x.toDouble()
			val atlasHeight = pageSize.y.toDouble()
			val regionX = box.position.x.toDouble()
			val regionY = (pageSize.y - box.dimension.y - box.position.y).toDouble()
			val regionWidth = box.dimension.x.toDouble()
			val regionHeight = box.dimension.y.toDouble()

			val calculator: (Vector2) -> (Vector2) = {
				Vector2(
						(regionX + it.x * regionWidth) / atlasWidth,
						(regionY + it.y * regionHeight) / atlasHeight
				)
			}
			return Pair(page, calculator)
		}

		fun cloneUV(geometry: Geometry, sourceKind: String, targetKind: String): Boolean {
			if (!geometry.isVerticesDataPresent(sourceKind)) return false
			val original = geometry.getVerticesData(sourceKind) as Array<Double>

			geometry.setVerticesData(targetKind, original.copyOf(), false)
			return true
		}

		fun convertUV(geometry: Geometry, sourceKind:Int, converter: UVConverter): Boolean {
			val kind = getKindByIndex(sourceKind)
			if (!geometry.isVerticesDataPresent(kind)) return false

			val data = geometry.getVerticesData(kind) as Array<Double>

			val max = data.size / 2
			for (i in 0 until max) {
				val x = data[i * 2]
				val y = data[i * 2 + 1]
				val uv = converter(Vector2(x, y))
				data[i * 2] = uv.x
				data[i * 2 + 1] = uv.y
			}

			geometry.setVerticesData(kind, data, false)
			return true
		}

		private fun getKindByIndex(coordinatesIndex: Int): String {
			return when (coordinatesIndex) {
				0 -> VertexBuffer.UVKind
				1 -> VertexBuffer.UV2Kind
				2 -> VertexBuffer.UV3Kind
				3 -> VertexBuffer.UV4Kind
				4 -> VertexBuffer.UV5Kind
				5 -> VertexBuffer.UV6Kind
				else -> throw Error("Supported coordinatesIndex from 0 to 5")
			}
		}
	}
}