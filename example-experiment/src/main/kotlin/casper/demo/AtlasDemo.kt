package casper.demo

import BABYLON.Scene
import BABYLON.extension.createScene
import casper.util.loader.createAtlasLoader

class AtlasDemo {
	private val scene: Scene = createScene("renderCanvas", true)

	init {
		createAtlasLoader(scene,"atlas.atlas").then({
			println(it)
		}, {
			println(it)
		})
	}

	fun run() {
		// run the render loop
		val engine = scene.getEngine()
		engine.runRenderLoop {
			engine.resize()
			scene.render()
		}
	}

}
