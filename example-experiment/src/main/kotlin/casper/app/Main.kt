package casper.app

import casper.collection.nextItem
import casper.geometry.Vector3d
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRender
import casper.render.extension.MaterialReplacer
import casper.render.material.ConstantColorReference
import casper.render.material.MaterialReference
import casper.render.node.Node
import casper.types.Color4d
import casper.util.AssetStorage
import kotlin.random.Random

fun main() {
	val engine = BabylonRender.create("renderCanvas")
	val assets = AssetStorage(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { scene ->

		//	change copy
		val blueModel = MaterialReplacer.execute(scene.content, "Blue-drill") {
			if (it.name == "Paint2") {
				MaterialReference("Blue-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(0.0, 0.0, 1.0, 0.0))))
			} else null
		}

		//	change copy
		val redModel = MaterialReplacer.execute(scene.content, "Red-drill") {
			if (it.name == "Paint2") {
				MaterialReference("Red-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(1.0, 0.0, 0.0, 0.0))))
			} else null
		}


		val nodes = mutableListOf<Node>()
		for (x in 0 until 8) {
			for (y in 0 until 8) {
				val node = Node(
						Transform(position = Vector3d(x.toDouble(), y.toDouble(), 0.0)),
						if (y == x) redModel else blueModel,
						Animations(true, (x / 8.0 + 1.0), emptyList())
				)
				nodes.add(node)
				engine.addNode(node)
			}
		}

		val random = Random(0)
		engine.nextFrameFuture.then {
			if (random.nextDouble() < 0.05) {
				random.nextItem(nodes)?.let {
					it.animations = Animations(true, 0.0, emptyList())
				}
			}
			if (random.nextDouble() < 0.05) {
				random.nextItem(nodes)?.let {
					it.animations = Animations(true, 1.0, emptyList())
				}
			}
		}

	}

	engine.runRenderLoop()
}
