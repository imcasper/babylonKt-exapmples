package casper.util.atlas

import casper.geometry.Vector2i

data class AtlasPageInfo(val name: String, val size: Vector2i, val regions: Map<String, AtlasRegion>)
data class AtlasInfo(val name:String, val pages: List<AtlasPageInfo>)