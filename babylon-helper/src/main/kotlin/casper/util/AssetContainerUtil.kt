package casper.util

import BABYLON.*

fun AssetContainer.clone(): AssetContainer {
	val textureMap = linkedMapOf<BaseTexture, BaseTexture>()
	val materialMap = linkedMapOf<Material, Material>()
	val meshMap = linkedMapOf<AbstractMesh, AbstractMesh>()
	val geometryMap = linkedMapOf<Geometry, Geometry>()

	this.textures.forEach {
		val copy = it.clone()
		if (copy == null) {
			textureMap.set(it, it)
		} else {
			textureMap.set(it, copy)
		}
	}

	this.materials.forEach {
		val copy = it.clone(it.name)
		if (copy == null) {
			materialMap.set(it, it)
		} else {
			materialMap.set(it, copy)

			if (copy is PBRMaterial && it is PBRMaterial) {
				textureMap[it.albedoTexture]?.let { next ->
					copy.albedoTexture = next
				}
				textureMap[it.ambientTexture]?.let { next ->
					copy.ambientTexture = next
				}
				textureMap[it.bumpTexture]?.let { next ->
					copy.bumpTexture = next
				}
				textureMap[it.emissiveTexture]?.let { next ->
					copy.emissiveTexture = next
				}
				textureMap[it.lightmapTexture]?.let { next ->
					copy.lightmapTexture = next
				}
				textureMap[it.metallicTexture]?.let { next ->
					copy.metallicTexture = next
				}
				textureMap[it.microSurfaceTexture]?.let { next ->
					copy.microSurfaceTexture = next
				}
				textureMap[it.opacityTexture]?.let { next ->
					copy.opacityTexture = next
				}
				textureMap[it.reflectivityTexture]?.let { next ->
					copy.reflectivityTexture = next
				}
				textureMap[it.reflectionTexture]?.let { next ->
					copy.reflectionTexture = next
				}
			}
		}
	}

	this.geometries.forEach {
		val copy = it.copy(it.id)
		geometryMap.set(it, copy)
	}

	this.meshes.forEach {
		val copy = it.clone(it.name, it.parent)
		if (copy is Mesh) {
			scene.removeMesh(copy)
		}

		if (copy == null) {
			meshMap.set(it, it)
		} else {
			meshMap.set(it, copy)

			if (it is Mesh && copy is Mesh) {
				geometryMap.get(it.geometry)?.applyToMesh(copy)
			}
			copy.material = materialMap.get(it.material)
		}
	}

	val target = AssetContainer(scene)
	target.textures += textureMap.values
	target.materials += materialMap.values
	target.geometries += geometryMap.values
	target.meshes += meshMap.values

	return target
}