package casper.app

import casper.geometry.Vector3d
import casper.render.ConstantColorReference
import casper.render.MaterialReference
import casper.render.ModelReference
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRenderEngine
import casper.render.node.Content
import casper.render.node.Node
import casper.types.Color4d
import casper.util.AssetStorage

object MaterialReplacer {
	fun execute(content: Content, replacer: (MaterialReference) -> MaterialReference?): Content {
		return iterate(content, replacer, mutableMapOf())
	}

	private fun iterate(content: Content, replacer: (MaterialReference) -> MaterialReference?, materialMap: MutableMap<MaterialReference, MaterialReference?>): Content {
		val children = content.children.map {
			it.copy(content = iterate(it.content, replacer, materialMap))
		}.toMutableList()

		val model = content.model

		if (model != null) {
			val last = model.material
			val next = materialMap.getOrPut(last) {
				replacer(last)
			}
			if (next != null) {
				return content.copy(children = children, model = ModelReference(model.name, model.vertices, next))
			}
		}
		return content.copy(children = children)
	}
}

fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	val assets = AssetStorage(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->

		//	change copy
		val blueModel = MaterialReplacer.execute(sceneData.content) {
			if (it.name == "Paint2") {
				MaterialReference("Blue-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(0.0, 0.0, 1.0, 0.0))))
			} else null
		}

		//	change copy
		val redModel = MaterialReplacer.execute(sceneData.content) {
			if (it.name == "Paint2") {
				MaterialReference("Red-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(1.0, 0.0, 0.0, 0.0))))
			} else null
		}



		for (x in 0 until 8) {
			for (y in 0 until 8) {
				engine.addNode(
						Node(
								Transform(position = Vector3d(x.toDouble(), y.toDouble(), 0.0)),
								if (y == x) redModel else blueModel,
								Animations(true, (x / 64.0 + 1.0), emptyList())
						)
				)
			}
		}

//		engine.root.commit()
	}

	engine.runRenderLoop()
}
