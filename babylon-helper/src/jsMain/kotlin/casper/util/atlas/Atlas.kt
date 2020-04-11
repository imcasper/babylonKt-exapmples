package casper.util.atlas

import BABYLON.Texture

class AtlasPage(val texture: Texture, val info: AtlasPageInfo)

class Atlas(val pages: Map<String, AtlasPage>) {
	fun getRegion(name: String): Pair<AtlasPage, AtlasRegion>? {
		pages.values.forEach { page ->
			val region = page.info.regions.get(name)
			if (region != null) {
				return Pair(page, region)
			}
		}
		return null
	}
}