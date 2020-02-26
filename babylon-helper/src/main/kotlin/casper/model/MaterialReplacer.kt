package casper.model

import BABYLON.Material
import BABYLON.Mesh
import BABYLON.StandardMaterial

class MaterialReplacer {
	companion object {
		fun replace(data: ModelData, replacer: (Material) -> (Material?)): Collection<Material> {
			val map = mutableMapOf<Material, Material>()
			data.assetContainer.materials.forEach { last ->
				val next = replacer(last)
				if (next != null) {
					map.set(last, next)
				}
			}

			data.assetContainer.materials = map.values.toTypedArray()

			data.assetContainer.meshes.forEach {
				if (it is Mesh) {
					val last = it.material
					if (last != null) {
						val next = map.get(last)
						if (next != null) {
							it.material = next
						}
					}
				}
			}
			return map.values
		}
	}
}