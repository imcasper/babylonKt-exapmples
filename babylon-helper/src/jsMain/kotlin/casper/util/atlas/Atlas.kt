package casper.util.atlas

import org.w3c.dom.Image

class AtlasPage(val image: Image, val info: AtlasPageInfo)

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