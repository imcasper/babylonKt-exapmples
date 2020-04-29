package casper.util

import BABYLON.BaseTexture
import BABYLON.Color3
import BABYLON.Material
import BABYLON.PBRMaterial

fun Material.forEachTexture(operation: (BaseTexture) -> Unit) {
	if (this is PBRMaterial) {
		albedoTexture?.let { operation(it) }
		ambientTexture?.let { operation(it) }
		bumpTexture?.let { operation(it) }
		emissiveTexture?.let { operation(it) }
		lightmapTexture?.let { operation(it) }
		metallicTexture?.let { operation(it) }
		microSurfaceTexture?.let { operation(it) }
		opacityTexture?.let { operation(it) }
		reflectivityTexture?.let { operation(it) }
		reflectionTexture?.let { operation(it) }
	}
}

fun Material.forEachTextureChange(operation: (BaseTexture) -> BaseTexture) {
	if (this is PBRMaterial) {
		albedoTexture?.let { albedoTexture = operation(it) }
		ambientTexture?.let { ambientTexture = operation(it) }
		bumpTexture?.let { bumpTexture = operation(it) }
		emissiveTexture?.let { emissiveTexture = operation(it) }
		lightmapTexture?.let { lightmapTexture = operation(it) }
		metallicTexture?.let { metallicTexture = operation(it) }
		microSurfaceTexture?.let { microSurfaceTexture = operation(it) }
		opacityTexture?.let { opacityTexture = operation(it) }
		reflectivityTexture?.let { reflectivityTexture = operation(it) }
		reflectionTexture?.let { reflectionTexture = operation(it) }
	}
}

fun Material.forEachColor(operation: (Color3) -> Unit) {
	if (this is PBRMaterial) {
		operation(albedoColor)
		operation(ambientColor)
		operation(emissiveColor)
		operation(reflectionColor)
		operation(reflectivityColor)
	}
}