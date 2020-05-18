package casper.model

class ModelCreateOptions(val ignoreCameras: Boolean = true, val ignoresLights: Boolean = true, val isPickable: Boolean? = null, val cullingStrategy: Int? = null, val castShadow: Boolean = true, val receiveShadow: Boolean = true)