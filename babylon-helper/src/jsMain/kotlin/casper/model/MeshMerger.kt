package casper.model

import BABYLON.*
import casper.util.clone
import casper.util.copyMeshState
import casper.util.forEachColor
import casper.util.forEachTexture

data class MaterialKey(val key: String) {
	companion object {
		fun create(material: Material?, ignoreName: Boolean = true): MaterialKey {
			if (material == null) return MaterialKey("")

			var key = ""
			material.forEachColor {
				key += "color: " + it + ";"
			}
			material.forEachTexture {
				key += "texture: " + it + ";"
			}
			if (material is PBRMaterial) {
				key += "rough:" + material.roughness + ";"
				key += "metallic:" + material.metallic + ";"
				key += "specularIntensity:" + material.specularIntensity + ";"
			}
			return MaterialKey(key)
		}
	}
}

data class MeshKey(
		val materialKey: MaterialKey,
		val animationKey: String,
		val ColorKind: Boolean,
		val TangentKind: Boolean,
		val PositionKind: Boolean,
		val NormalKind: Boolean,
		val UVKind: Boolean,
		val UV2Kind: Boolean,
		val UV3Kind: Boolean,
		val UV4Kind: Boolean,
		val UV5Kind: Boolean,
		val UV6Kind: Boolean) {
	companion object {
		private var uniqueId = 0
		fun create(mesh: AbstractMesh): MeshKey {
			val animationKey = if (mesh.animations.isNotEmpty()) (++uniqueId).toString() else ""
			return MeshKey(
					animationKey = animationKey,
					materialKey = MaterialKey.create(mesh.material),
					ColorKind = mesh.isVerticesDataPresent(VertexBuffer.ColorKind),
					TangentKind = mesh.isVerticesDataPresent(VertexBuffer.TangentKind),
					PositionKind = mesh.isVerticesDataPresent(VertexBuffer.PositionKind),
					NormalKind = mesh.isVerticesDataPresent(VertexBuffer.NormalKind),
					UVKind = mesh.isVerticesDataPresent(VertexBuffer.UVKind),
					UV2Kind = mesh.isVerticesDataPresent(VertexBuffer.UV2Kind),
					UV3Kind = mesh.isVerticesDataPresent(VertexBuffer.UV3Kind),
					UV4Kind = mesh.isVerticesDataPresent(VertexBuffer.UV4Kind),
					UV5Kind = mesh.isVerticesDataPresent(VertexBuffer.UV5Kind),
					UV6Kind = mesh.isVerticesDataPresent(VertexBuffer.UV6Kind)
			)
		}
	}
}

class MeshMerger {
	companion object {
		private fun createMeshMap(data: ModelData): Map<MeshKey, MutableList<Mesh>> {
			val scene = data.scene
			val meshMap = mutableMapOf<MeshKey, MutableList<Mesh>>()

			data.instances.forEach {
				val mesh = it.sourceMesh.clone()
				scene.removeMesh(mesh)
				copyMeshState(it, mesh)

				val key = MeshKey.create(mesh)

				val meshList = meshMap.get(key)
				if (meshList == null) {
					meshMap[key] = mutableListOf(mesh)
				} else {
					meshList.add(mesh)
				}
			}
			return meshMap
		}

		private fun canMerge(meshList: List<Mesh>): Boolean {
			meshList.forEach {
				if (it.animations.isNotEmpty()) return false
			}
			return true
		}

		fun merge(data: ModelData, name:String): ModelData? {
			val scene = data.scene

			val meshMap = createMeshMap(data)
			val meshes = mutableListOf<Mesh>()
			meshMap.values.forEach { meshList ->
				var mergeResult: Mesh? = null
				if (canMerge(meshList)) {
					mergeResult = Mesh.MergeMeshes(meshList.toTypedArray())
				}
				if (mergeResult == null) {
					meshes.addAll(meshList)
				} else {
					scene.removeMesh(mergeResult)
					meshes.add(mergeResult)
				}
			}

			if (meshes.size == 0) return null

			val container = AssetContainer(scene)
			container.meshes += meshes
			meshes.forEach { mesh ->
				mesh.geometry?.let { geometry ->
					container.geometries += geometry
				}
				mesh.material?.let { material ->
					container.materials += material

					material.forEachTexture {
						container.textures += it
					}
				}
			}

			return ModelFactory.createModelData(scene,name, container.clone())
		}
	}
}