/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.SceneLoader
import BABYLON.extension.createScene
import BABYLON.extension.runRenderLoop

fun main() {
	val scene = createScene("renderCanvas", true)
	scene.createDefaultCameraOrLight(true, true, true)
	scene.createDefaultEnvironment()

	SceneLoader.Append("", "cube.babylon", scene)

	scene.runRenderLoop()
}
