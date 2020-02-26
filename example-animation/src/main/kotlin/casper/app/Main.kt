/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.*
import BABYLON.GUI.TextBlock
import BABYLON.extension.runRenderLoop
import kotlin.math.abs
import kotlin.math.roundToInt
import kotlin.random.Random


fun main() {
	val scene = BABYLON.extension.createScene("renderCanvas", true)
	scene.createDefaultCameraOrLight(true, true, true)
	scene.createDefaultEnvironment()

	SceneLoader.LoadAssetContainer("", "cube.babylon", scene, {
		it.animations
		it.addAllToScene()
	})


	scene.runRenderLoop()
}

