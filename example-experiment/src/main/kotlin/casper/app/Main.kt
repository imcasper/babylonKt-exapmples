package casper.app

import casper.geometry.Vector3d
import casper.render.*
import casper.render.animation.Animations
import casper.render.babylon.BabylonRenderEngine
import casper.render.node.Content
import casper.render.node.Node
import casper.types.Color4d
import casper.util.AssetStorage

fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	val assets = AssetStorage(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->

		val originalContent = sceneData.content

		// change original material
		val firstModel = originalContent.children.first().content.model!!
		val firstMaterial = firstModel.material

		firstMaterial.data = firstMaterial.data.copy(albedo = ConstantColorInput(Color4d(1.0, 0.0, 0.0, 0.0)))

		//	change copy
		val material = MaterialReference("new-material", firstMaterial.data.copy(albedo = ConstantColorInput(Color4d(0.0, 0.0, 1.0, 0.0))))

		val contentCopy = Content(sceneData.content.name, null, sceneData.content.children.map { node ->
			val oldModel = node.content.model!!

			val content = node.content.copy(model = ModelReference(oldModel.name, oldModel.vertices, material))
			node.copy(content = content, transform = node.transform.copy(), animations = node.animations?.copy())
		}.toMutableList())

		for (x in 0 until 8) {
			for (y in 0 until 8) {
				engine.addNode(
						Node(
								Transform(position = Vector3d(x.toDouble(), y.toDouble(), 0.0)),
								if (y == x) originalContent else contentCopy,
								Animations(true, (x / 64.0 + 1.0), emptyList())
						)
				)
			}
		}

//		engine.root.commit()
	}

	engine.runRenderLoop()
}
