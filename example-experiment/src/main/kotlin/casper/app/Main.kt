package casper.app

import casper.geometry.Vector3d
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRenderEngine
import casper.render.node.Node
import casper.util.AssetStorage


fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	val assets = AssetStorage(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
		for (x in 0 until 8) {
			for (y in 0 until 8) {
				engine.addNode(
						Node(
								Transform(position = Vector3d(x.toDouble(), y.toDouble(), 0.0)),
								sceneData.content,
								Animations(true, (x / 64.0 + y), emptyList())
						)
				)
			}
		}

//		engine.root.commit()
	}

	engine.runRenderLoop()
}
