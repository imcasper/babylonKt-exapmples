package casper.model

import BABYLON.AssetContainer
import BABYLON.InstancedMesh
import BABYLON.Mesh
import BABYLON.Scene
import casper.util.clone
import casper.util.copyMeshState

class ModelData(val name:String, val scene: Scene, val assetContainer: AssetContainer, val instances: List<InstancedMesh>) {
	fun clone(name:String): ModelData {
		val lastContainer = this.assetContainer
		val nextContainer = this.assetContainer.clone()

		val instances = mutableListOf<InstancedMesh>()

		this.instances.forEach { lastMesh ->
			val sourceMesh = nextContainer.meshes.getOrNull(lastContainer.meshes.indexOf(lastMesh.sourceMesh))
					?: throw Error("Not found source mesh")
			sourceMesh as? Mesh ?: throw Error("Invalid mesh format")

			val nextMesh = sourceMesh.createInstance(sourceMesh.name)
			scene.removeMesh(nextMesh)
			instances.add(nextMesh)
			copyMeshState(lastMesh, nextMesh)
		}
		return ModelData(name, scene, nextContainer, instances)
	}
}