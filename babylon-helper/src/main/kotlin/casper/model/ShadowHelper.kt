package casper.model

import BABYLON.*
import casper.util.forChildren

class ShadowHelper {
	companion object {
		fun getShadowGenerator(scene: Scene): ShadowGenerator? {
			scene.lights.firstOrNull()?.let { light ->
				light.getShadowGenerator()?.let { shadowGenerator ->
					return shadowGenerator as? ShadowGenerator
				}
			}
			return null
		}

		fun addCaster(node: Node) {
			getShadowGenerator(node.getScene())?.let { shadowGenerator ->
				addCaster(shadowGenerator, node)
			}
		}

		fun removeCaster(node: Node) {
			getShadowGenerator(node.getScene())?.let { shadowGenerator ->
				removeCaster(shadowGenerator, node)
			}
		}

		fun addCaster(shadowGenerator: ShadowGenerator, node: Node) {
			if (node is AbstractMesh) {
				shadowGenerator.addShadowCaster(node)
			}
			node.forChildren {
				addCaster(shadowGenerator, it)
			}
		}

		fun addReceiver(node: Node) {
			if (node is InstancedMesh) {
				node.sourceMesh.receiveShadows = true
			} else if (node is Mesh) {
				node.receiveShadows = true
			}
			node.forChildren {
				addReceiver(it)
			}
		}

		fun removeReceiver(node: Node) {
			if (node is InstancedMesh) {
				//	cant remove, because other instance can on scene
				//	node.sourceMesh.receiveShadows = true
			} else if (node is Mesh) {
				node.receiveShadows = false
			}
			node.forChildren {
				removeReceiver(it)
			}
		}

		fun removeCaster(shadowGenerator: ShadowGenerator, node: Node) {
			if (node is InstancedMesh) {
				shadowGenerator.removeShadowCaster(node)
			} else if (node is Mesh) {
				shadowGenerator.removeShadowCaster(node)
			}
			node.forChildren {
				removeCaster(shadowGenerator, it)
			}
		}

	}

}