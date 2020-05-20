package casper.util.atlas

import casper.types.Bitmap

class AtlasPage(val bitmap: Bitmap, val info: AtlasPageInfo)

data class Atlas(val name:String, val pages: Map<String, AtlasPage>) {
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