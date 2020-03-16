package casper.model

import BABYLON.*
import casper.util.copyMeshState
import kotlin.Error

class ModelFactory {

	companion object {

		fun createModelData(scene: Scene, name: String, container: AssetContainer): ModelData {
			val instances = mutableListOf<InstancedMesh>()
			for (originalMesh in container.meshes) {
				if (originalMesh is Mesh) {
					instances += createInstancesFromMesh(originalMesh)

					originalMesh.geometry?.let { geometry ->
						if (!container.geometries.contains(geometry)) {
							container.geometries += geometry
						}
					}
				} else {
					throw Error("Unsupported mesh type: $originalMesh")
				}
			}
			return ModelData(name, scene, container, instances)
		}

		private fun createInstancesFromMesh(originalMesh: Mesh): List<InstancedMesh> {
			val scene = originalMesh.getScene()
			originalMesh.isVisible = false

			val instances = originalMesh.instances.toMutableList()
			instances.add( originalMesh.createInstance(originalMesh.name))

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
			data.assetContainer.meshes.forEach {
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
	}
}