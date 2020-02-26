package casper.model

import BABYLON.*
import casper.util.addMeshToScene
import casper.util.copyMeshState

class ModelCreateOptions(val ignoreCameras: Boolean = true, val ignoresLights: Boolean = true, val isPickable: Boolean? = null, val cullingStrategy: Double? = null)

class ModelFactory {

	companion object {
		fun createAndPlace(data: ModelData, root: TransformNode? = null, options: ModelCreateOptions? = null): TransformNode {
			val main = create(data, options)
			main.addMeshToScene()
			if (root != null) {
				main.parent = root
			}
			return main
		}

		fun create(data: ModelData, options: ModelCreateOptions? = null): TransformNode {
			val options = options ?: ModelCreateOptions()
			return wrapTransformNode(createModel(data, options), options)
		}

		private fun createModel(data: ModelData, options: ModelCreateOptions): Model {
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
			return Model(data, instances)
		}

		private fun createInstance(source: InstancedMesh): InstancedMesh {
			val scene = source.getScene()
			val target = source.sourceMesh.createInstance(source.name)
			copyMeshState(source, target)
			scene.removeMesh(target)
			return target
		}

		private fun wrapTransformNode(model: Model, options: ModelCreateOptions): TransformNode {
			val scene = model.data.scene
			val node = TransformNode("", null)
			model.instances.forEach {
				it.parent = node
			}
			if (!options.ignoresLights) {
				model.data.assetContainer.lights.forEach {
					//	light automatically added in clone
					it.clone(it.name)
				}
			}
			if (!options.ignoreCameras) {
				model.data.assetContainer.cameras.forEach {
					//	todo: camera automatically added in clone?
					it.clone(it.name)
				}
			}
			return node
		}

		fun createModelData(scene: Scene, name:String, container: AssetContainer): ModelData {
			val instances = mutableListOf<InstancedMesh>()
			for (originalMesh in container.meshes) {
				if (originalMesh is Mesh) {
					instances += createMeshInstances(originalMesh)

					originalMesh.geometry?.let { geometry ->
						if (!container.geometries.contains(geometry)) {
							container.geometries += geometry
						}
					}
				}
			}
			return ModelData(name, scene, container, instances)
		}

		private fun createMeshInstances(originalMesh: Mesh): List<InstancedMesh> {
			val instances = mutableListOf<InstancedMesh>()
			val scene = originalMesh.getScene()
			originalMesh.convertToUnIndexedMesh()
			scene.removeMesh(originalMesh)

			val originalMeshInstances = originalMesh.instances.copyOf()

			val mainInstance = originalMesh.createInstance(originalMesh.name)
			scene.removeMesh(mainInstance)
			instances.add(mainInstance)
			originalMeshInstances.forEach { subInstances ->
				scene.removeMesh(subInstances)
				instances.add(subInstances)
			}
			return instances
		}
	}
}

fun ModelData.createInstance(options: ModelCreateOptions? = null): TransformNode {
	return ModelFactory.create(this, options)
}

fun ModelData.createAndPlaceInstance(root: TransformNode? = null, options: ModelCreateOptions? = null): TransformNode {
	return ModelFactory.createAndPlace(this, root, options)
}