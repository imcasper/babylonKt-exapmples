package casper.app

import casper.geometry.Vector3d
import casper.render.Node
import casper.render.Transform
import casper.render.babylon.BabylonRenderEngine
import casper.util.AssetManager


fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	val assets = AssetManager(engine.nativeScene)

	createDefaultScene(engine.nativeScene)
	assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
		for (x in 1..64) {
			for (y in 1..64) {
				val node = Node()
				node.children = sceneData.nodeList.map { it.copy(false, false, false) }
				node.transform = Transform(Vector3d(x.toDouble(), y.toDouble(), 0.0))
				node.setSpeed(30.0 / 1000.0 * 0.1 * (x+y).toDouble())
				engine.root.children += node
			}
		}
	}

	engine.runRenderLoop()
}
