package casper.app

import BABYLON.*
import BABYLON.Debug.AxesViewer
import casper.asset.Assets
import casper.model.createAndPlaceInstance
import casper.util.forChildren
import casper.util.playAnimation

class ShadowDemo(val scene: Scene, val assets:Assets) {
	val light = scene.lights.first() as IShadowLight
	val shadowGenerator = ShadowGenerator(1024.0, light)

	init {
		for (x in 0..6) {
			for (y in 0..6) {
				createModel(Vector3(x * 10.0 - 30.0, 0.5, y * 10.0 - 30.0))
			}
		}

		val cube = assets.cube.createAndPlaceInstance()
		cube.position = Vector3(0.0, -1.0, 0.0)
		cube.scaling = Vector3(100.0, 1.0, 100.0)

		AxesViewer(scene)

		addShadowReceiver(shadowGenerator, cube)
	}

	private fun createModel(position: Vector3) {
		val model = assets.animation.createAndPlaceInstance()
		model.playAnimation(true)
		addShadowCaster(shadowGenerator, model)
		addShadowReceiver(shadowGenerator, model)

		model.position = position
	}

	private fun addShadowCaster(shadowGenerator: ShadowGenerator, node: Node) {
		if (node is AbstractMesh) {
			shadowGenerator.addShadowCaster(node)
		}
		node.forChildren {
			addShadowCaster(shadowGenerator, it)
		}
	}

	private fun addShadowReceiver(shadowGenerator: ShadowGenerator, node: Node) {
//		if (node is AbstractMesh) {
//			node.receiveShadows = true
//		}
		if (node is InstancedMesh) {
			node.sourceMesh.receiveShadows = true
		}
		node.forChildren {
			addShadowReceiver(shadowGenerator, it)
		}
	}
}
