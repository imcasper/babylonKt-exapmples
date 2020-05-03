package casper.app

import casper.geometry.Vector3d
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRender
import casper.render.extension.MaterialReplacer
import casper.render.material.ConstantColorReference
import casper.render.material.MaterialReference
import casper.render.node.Content
import casper.render.node.Node
import casper.types.Color4d
import casper.util.AssetStorage

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
