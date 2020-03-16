package casper.app

import BABYLON.*
import casper.util.forChildren

class Shadow(val scene: Scene) {
	val camera = scene.activeCamera as ArcRotateCamera
	val light = scene.lights.first() as DirectionalLight
	val shadowGenerator = ShadowGenerator(1024.0, light)

	init {
		camera.minZ = 5.0
		light.shadowFrustumSize = 100.0
		light.autoCalcShadowZBounds = true
		light.autoUpdateExtends = false

//		shadowGenerator.transparencyShadow = true

		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			light.position = Vector3(camera.target.x, light.shadowFrustumSize / 2.0, camera.target.z)

		})
	}

	fun addShadowCaster(node: Node) {
		if (node is AbstractMesh) {
			shadowGenerator.addShadowCaster(node)
		}
		node.forChildren {
			addShadowCaster(it)
		}
	}

	fun addShadowReceiver(node: Node) {
		if (node is InstancedMesh) {
			node.sourceMesh.receiveShadows = true
		}
		node.forChildren {
			addShadowReceiver(it)
		}
	}
}
