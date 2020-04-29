package casper.model

import BABYLON.Material
import BABYLON.Mesh

class MaterialReplacer {
	companion object {
		fun replace(original: ModelData, replacer: (Material) -> (Material?)): ModelData {
			val replacedMaterials = mutableMapOf<Material, Material>()

			val nextMaterials = mutableListOf<Material>()
			val nextMeshes = mutableListOf<Mesh>()

			original.materials.forEach { last ->
				val next = replacer(last)
				if (next != null && next != last) {
					replacedMaterials.set(last, next)
					nextMaterials.add(next)
				} else {
					nextMaterials.add(last)
				}
			}

			original.meshes.forEach { originalMesh->
				val nextMaterial = replacedMaterials.get(originalMesh.material)
				if (nextMaterial != null){
					val lastGeometry = originalMesh.geometry
					val nextGeometry = lastGeometry?.copy(lastGeometry.id)

					val clonedMesh = originalMesh.clone(originalMesh.name, originalMesh.parent) as Mesh
					nextGeometry?.applyToMesh(clonedMesh)
					clonedMesh.material = nextMaterial

					nextMeshes.add(clonedMesh)
				} else {
					nextMeshes.add(originalMesh)
				}
			}


			val nextInstances = ModelFactory.createInstanceList(original.scene, original.instances, original.meshes, nextMeshes)
			return ModelData(original.name, original.scene, nextMeshes, original.textures, nextMaterials, original.geometries, original.lights, original.cameras, nextInstances)
		}
	}
}