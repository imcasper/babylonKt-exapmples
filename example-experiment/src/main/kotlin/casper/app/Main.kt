/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.*
import BABYLON.extension.createScene
import BABYLON.extension.runRenderLoop
import casper.asset.AssetManager
import casper.asset.Assets
import casper.asset.createAssetsArrayLoader
import casper.model.Model
import casper.util.*

fun main() {
	val scene = createScene("renderCanvas", true)
	scene.useRightHandedSystem = true

	while (scene.cameras.isNotEmpty()) {
		scene.removeCamera(scene.cameras.first())
	}
	val camera = ArcRotateCamera("camera", 0.5, 0.5, 10.0, Vector3.Zero(), scene)
	camera.upVector = Vector3(0.0, 0.0, 1.0)
	scene.addCamera(camera)

	val canvas = scene.getEngine().getRenderingCanvas() ?: throw Error("Invalid canvas")
	camera.attachControl(canvas, true)

	//	scene.createDefaultCamera(true, true, true)
//	scene.activeCamera?.position = Vector3(5.0, 5.0, 5.0)
	SceneLoader.ShowLoadingScreen = false


	val manager = AssetManager(scene)
	manager.atlases.loader("atlas.atlas").thenAccept {
		createAssetsArrayLoader(manager).then({
			Demo(scene, manager, it)
		}, {
			scene.clearColor = Color4(1.0, 0.0, 0.0)
			println(it)
		})
	}
	scene.runRenderLoop()
}

class Demo(val scene: Scene, val manager: AssetManager, val assets: Assets) {
	init {
		createSkyBox()

		val shadow = Shadow(scene)

		Inspector(scene)

//		FPS(scene)
//		createMine()
		RobotDemo(scene, shadow, assets)
	}

	fun createSkyBox() {
//		val environmentTexture = CubeTexture("skybox.dds", scene, prefiltered = false, createPolynomials = false)
//		scene.environmentTexture = environmentTexture
//		scene.createDefaultSkybox(environmentTexture)

		// Light
		val light = DirectionalLight("light", Vector3(-1.0, -1.0, -1.0).normalize(), scene);
//		light.position = Vector3(100.0, 100.0, 50.0)
		light.intensity = 5.0

//		var time = 0.0
//		var reverse = false
//		scene.registerBeforeRender {
//			time += 0.001
//			val x = cos(time)
//			val y = sin(time)
//			light.direction = Vector3(x, -0.5, y)
//		};
	}
}
