/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.*
import BABYLON.extension.createScene
import BABYLON.extension.runRenderLoop
import babylon.BabylonUIScene
import casper.app.demo.CameraDemo
import casper.app.demo.PenetrationDemo
import casper.asset.AssetManager
import casper.asset.Assets
import casper.gui.UIScene
import casper.util.Inspector

fun main() {
	val scene = createScene("renderCanvas")
	scene.useRightHandedSystem = true

	val uiScene:UIScene = BabylonUIScene(scene)
	CameraDemo(scene, uiScene)
//	PenetrationDemo(scene, uiScene)
	SceneLoader.ShowLoadingScreen = false
		val environmentTexture = CubeTexture("skybox.dds", scene, prefiltered = false, createPolynomials = false)
		scene.environmentTexture = environmentTexture
		scene.createDefaultSkybox(environmentTexture)

//
//	val manager = AssetManager(scene)
//	manager.atlases.loader("atlas.atlas").thenAccept {
//		createAssetsArrayLoader(manager).then({
//			Demo(scene, manager, it)
//		}, {
//			scene.clearColor = Color4(1.0, 0.0, 0.0)
//			println(it)
//		})
//	}
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
