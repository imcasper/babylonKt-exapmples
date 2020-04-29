package casper.model

import BABYLON.*
import casper.util.atlas.Atlas
import casper.util.atlas.AtlasPage
import casper.util.forEachTexture
import kotlin.Error

class TextureReplacer {
	companion object {

		fun replace(data: ModelData, sourceTextureName: String?, targetTextureUrl: String): Map<Material, List<BaseTexture>> {
			val map = mutableMapOf<Material, List<BaseTexture>>()
			data.materials.forEach { material ->
				val textures = mutableListOf<BaseTexture>()
				material.forEachTexture { texture ->
					if (replaceTexture(texture, sourceTextureName, targetTextureUrl)) {
						textures.add(texture)
						map.put(material, textures)
					}
				}
			}
			return map
		}

		fun meshesByMaterials(source: Collection<AbstractMesh>, materials: Collection<Material>): List<Mesh> {
			val target = mutableListOf<Mesh>()
			source.forEach { mesh ->
				if (materials.contains(mesh.material)) {
					if (mesh is Mesh) {
						target.add(mesh)
					}
				}
			}
			return target
		}

		private fun replaceTexture(base: BaseTexture?, sourceTextureName: String?, targetTextureUrl: String): Boolean {
			(base as? Texture)?.let { texture ->
				if (sourceTextureName == null || texture.name == sourceTextureName) {
					texture.updateURL(targetTextureUrl)
					return true
				}
			}
			return false
		}
	}
}