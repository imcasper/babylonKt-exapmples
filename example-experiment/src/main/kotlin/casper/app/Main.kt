package casper.app

import casper.geometry.Vector3d
import casper.render.Node
import casper.render.babylon.BabylonRenderEngine
import casper.util.AssetManager


fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	val assets = AssetManager(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
		for (x in 0 until 3) {
			for (y in 0 until 3) {
				val offset = Vector3d(x.toDouble(), y.toDouble(), 0.0)
				val nodes = sceneData.nodeList.map { it.move(offset) }

				nodes.forEach {
					engine.root = engine.root.addChild(it)
				}
			}
		}

//		engine.root.commit()
	}

	engine.runRenderLoop()
}
