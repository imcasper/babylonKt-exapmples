package casper.util.loader

import casper.geometry.Vector2i
import casper.geometry.basis.Box2i
import casper.util.atlas.AtlasInfo
import casper.util.atlas.AtlasPageInfo
import casper.util.atlas.AtlasRegion


private fun parseVector(source: String): Vector2i? {
	val list = source.split(",")
	if (list.size == 2) {
		try {
			return Vector2i(list[0].toInt(), list[1].toInt())
		} catch (_: Throwable) {
			return null
		}
	} else {
		return null
	}
}

private fun parseVector(node: TextNode, name: String): Vector2i? {
	val source = node.properties.get(name) ?: return null
	return parseVector(source)
}


fun parseAtlasInfo(text: String): AtlasInfo {
	val pages = mutableListOf<AtlasPageInfo>()
	val textInfo = parseText(text)
	textInfo.forEach { mainNode ->
		val pageSize = parseVector(mainNode, "size") ?: throw Error("Invalid page size for ${mainNode.name}")
		val regions = mutableMapOf<String, AtlasRegion>()

		for (childrenNode in mainNode.children) {
			val position = parseVector(childrenNode, "xy")
					?: throw Error("Invalid position for ${childrenNode.name} in ${mainNode.name}")
			val size = parseVector(childrenNode, "size")
					?: throw Error("Invalid size for ${childrenNode.name} in ${mainNode.name}")

			regions.put(childrenNode.name, AtlasRegion(childrenNode.name, Box2i.byDimension(position, size)))
		}

		pages.add(AtlasPageInfo(mainNode.name, pageSize, regions))
	}
	return AtlasInfo(pages)
}

