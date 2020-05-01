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
	assets.getSceneFuture("robot_builder.babylon").thenAccept { sceneData ->
		val modelNode1 = Node()
		modelNode1.children += sceneData.nodeList
		modelNode1.transform = Transform(Vector3d.ONE)
		engine.root.children += modelNode1

		val modelNode2 = Node()
		modelNode2.children += sceneData.nodeList
		modelNode2.transform = Transform(Vector3d.ZERO)
		engine.root.children += modelNode2
	}

	engine.runRenderLoop()
}
