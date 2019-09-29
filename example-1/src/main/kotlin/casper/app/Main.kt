/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.Engine
import BABYLON.MeshBuilder
import BABYLON.Scene
import BABYLON.SphereOptions
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document


fun createScene(canvas: HTMLElement, engine: Engine): Scene {

	// Create the scene space
	val scene = Scene(engine);
	scene.createDefaultCameraOrLight(true, true, true)
	scene.createDefaultEnvironment()

	// Add and manipulate meshes in the scene
	MeshBuilder.CreateSphere("sphere", SphereOptions(diameterZ = 0.5, diameterY = 0.5), scene);

	return scene;

}

fun main() {
	document.addEventListener("oncontextmenu", { event ->
		event.stopImmediatePropagation()
	})
	val canvas = document.getElementById("renderCanvas")
	if (!(canvas is HTMLCanvasElement)) {
		throw Error("Cant find canvas with id renderCanvas")
	}
	val engine = Engine(canvas, true)
	val scene = createScene(canvas, engine)

	engine.runRenderLoop {
		engine.resize()
		scene.render()
	}
}
