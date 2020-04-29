package casper.app

import BABYLON.SceneLoader
import casper.geometry.Vector3d
import casper.render.*
import casper.types.BLUE
import casper.types.GREEN
import casper.types.RED
import casper.render.babylon.BabylonRenderEngine
import casper.render.babylon.SceneBuilder
import kotlin.random.Random

fun main() {
	val engine = BabylonRenderEngine.create("renderCanvas")
	createDefaultScene(engine.nativeScene)

	val node = Node()
	node.vertices = listOf(Vertex(Vector3d(0.0), RED), Vertex(Vector3d(0.0, 1.0, 0.0), GREEN), Vertex(Vector3d(0.0, 0.0, 1.0), BLUE))
	node.material = CustomMaterial(0.1, 0.2)

	engine.root.children += node

	val random = Random(0)
	SceneLoader.LoadAssetContainer("robot_builder.babylon", "", engine.nativeScene, {
		val builder = SceneBuilder(engine.nativeScene, "robot_builder.babylon", it)


		val modelNode1 = Node()
		modelNode1.children += builder.sceneData.nodeList
		modelNode1.transform = Transform(Vector3d.ONE)
		engine.root.children += modelNode1

		val modelNode2 = Node()
		modelNode2.children += builder.sceneData.nodeList
		modelNode2.transform = Transform(Vector3d.ZERO)
		engine.root.children += modelNode2

	})

	engine.runRenderLoop()
}
