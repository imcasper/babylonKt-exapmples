package casper.util.atlas

import casper.geometry.Vector2i

class AtlasPageInfo(val name: String, val size: Vector2i, val regions: Map<String, AtlasRegion>)
class AtlasInfo(val pages: List<AtlasPageInfo>)