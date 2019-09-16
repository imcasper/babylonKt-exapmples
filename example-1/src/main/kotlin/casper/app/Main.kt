/**
 * An example similar to the sample from the site:
 *		https://www.babylonjs-playground.com/#K6M44R
 */
package casper.app

import BABYLON.*
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLElement
import kotlin.browser.document
import kotlin.math.PI


fun createScene(canvas: HTMLElement, engine: Engine): Scene {

	// Create the scene space
	val scene = Scene(engine);

	// Add a camera to the scene and attach it to the canvas
	val camera = ArcRotateCamera("Camera", PI / 2, PI / 2, 4.0, Vector3.Zero(), scene);
	camera.attachControl(canvas, true);

	// Add lights to the scene
	val light1 = HemisphericLight("light1", Vector3(1.0, 1.0, 0.0), scene);
	val light2 = PointLight("light2", Vector3(0.0, 1.0, -1.0), scene);

	// Add and manipulate meshes in the scene
	val sphere = MeshBuilder.CreateSphere("sphere", object : `T$56` {
		override var diameterX: Number? = 1.0
		override var diameterY: Number? = 0.75
		override var diameterZ: Number? = 0.25
	}, scene);

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
