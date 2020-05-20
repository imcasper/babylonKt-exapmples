package casper.model

import BABYLON.*
import casper.util.copyMeshState
import casper.util.forEachTextureChange

class ModelFactory {

	companion object {

		fun createModelData(scene: Scene, name: String, container: AssetContainer): ModelData {
			val textureMap = mutableMapOf<String, BaseTexture>()
			val materialMap = mutableMapOf<String, Material>()
			val geometryList = mutableSetOf<GeometryInfo>()

			container.textures.forEach {
				textureMap.getOrPut(it.name, { it })
			}

			container.materials.forEach { material ->
				materialMap.getOrPut(material.name, {

					material.forEachTextureChange {
						textureMap[it.name]
								?: throw Error("Not found material by name: ${it.name}")
					}

					material
				})
			}

			val originalMeshList = mutableSetOf<Mesh>()
			val instancedMeshList = mutableListOf<InstancedMesh>()
			container.meshes.forEach { mesh ->
				if (mesh is InstancedMesh) {
					instancedMeshList.add(mesh)
				} else {
					if (mesh !is Mesh)
						throw Error("Actual $mesh, but expected Mesh")

					mesh.material?.let {
						mesh.material = materialMap[it.name]
								?: throw Error("Not found material by name: ${it.name}")
					}

					originalMeshList.add(mesh)
				}
			}

			//	todo:	i dont know how define inverse orientation
			val clockWiseOrientation = !name.contains(".gltf")

			for (mesh in originalMeshList) {
				instancedMeshList += createInstancesFromMesh(mesh)
				mesh.geometry?.let { geometryList.add(GeometryInfo(it, clockWiseOrientation)) }
			}

			return ModelData(name, scene, originalMeshList.toList(), textureMap.values.toList(), materialMap.values.toList(), geometryList.toList(), container.lights.toList(), container.cameras.toList(), instancedMeshList)
		}

		private fun createInstancesFromMesh(originalMesh: Mesh): List<InstancedMesh> {
			val scene = originalMesh.getScene()
			originalMesh.isVisible = false

			val instances = originalMesh.instances.toMutableList()
			instances.add(originalMesh.createInstance(originalMesh.name))

			instances.forEach {
				scene.removeMesh(it)
			}
			return instances
		}

		fun createInstances(data: ModelData, _options: ModelCreateOptions? = null): List<InstancedMesh> {
			val options = _options ?: ModelCreateOptions()
			val instances = mutableListOf<InstancedMesh>()
			data.instances.forEach { originalInstance ->
				val instance = createInstance(originalInstance)
				if (options.isPickable != null) {
					instance.isPickable = options.isPickable
				}
				if (options.cullingStrategy != null) {
					instance.cullingStrategy = options.cullingStrategy
				}
				instances.add(instance)
			}
			//	need for change instance amount ^_^
			data.meshes.forEach {
				it._resyncLightSources()
			}
			return instances
		}

		private fun createInstance(source: InstancedMesh): InstancedMesh {
			val scene = source.getScene()
			val target = source.sourceMesh.createInstance(source.name)
			copyMeshState(source, target)
			scene.removeMesh(target)
			return target
		}

		fun createInstanceList(scene: Scene, lastInstances: List<InstancedMesh>, lastMeshes: List<Mesh>, nextMeshes: List<Mesh>): List<InstancedMesh> {
			val nextInstances = mutableListOf<InstancedMesh>()

			lastInstances.forEach { lastMesh ->
				val lastIndex = lastMeshes.indexOf(lastMesh.sourceMesh)
				val sourceMeshInLast = lastMeshes.getOrNull(lastIndex)
				val sourceMesh = nextMeshes.getOrNull(lastIndex)
						?: throw Error("Not found source mesh")
				sourceMesh as? Mesh
						?: throw Error("Invalid mesh format")

				if (sourceMeshInLast == sourceMesh) {
					nextInstances.add(lastMesh)
				} else {
					val nextMesh = sourceMesh.createInstance(sourceMesh.name)
					scene.removeMesh(nextMesh)
					nextInstances.add(nextMesh)
					copyMeshState(lastMesh, nextMesh)
				}
			}
			return nextInstances
		}

	}
}