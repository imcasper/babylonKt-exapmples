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
import casper.asset.AssetManager
import casper.asset.Assets
import casper.gui.UIScene
import casper.util.Inspector
import kotlin.math.PI

fun main() {
	val scene = createScene("renderCanvas")
	scene.useRightHandedSystem = true

	val uiScene: UIScene = BabylonUIScene(scene)
	CameraDemo(scene, uiScene)
//	PenetrationDemo(scene, uiScene)
	val mesh = Mesh.CreateSphere("s", segments = 6.0, diameter = 60.0, scene = scene)
	val material = PBRMaterial("s", scene)
	material.metallic = 0.9
	material.roughness = 0.1
	mesh.material = material

	SceneLoader.ShowLoadingScreen = false
//		val environmentTexture = CubeTexture("skybox.dds", scene, prefiltered = false, createPolynomials = false)
//	environmentTexture.wrapU
//		scene.environmentTexture = environmentTexture
//		scene.createDefaultSkybox(environmentTexture)

	var skybox = Mesh.CreateBox("skyBox", 1000.0, scene);
	var skyboxMaterial = StandardMaterial("skyBox", scene);
	skyboxMaterial.backFaceCulling = false;
	skyboxMaterial.disableLighting = true;

	val reflectionTexture = CubeTexture("environment.dds", scene, prefiltered = false, createPolynomials = false)
	reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
	reflectionTexture.setReflectionTextureMatrix(Matrix.RotationX(-PI * 0.5));

	skyboxMaterial.reflectionTexture = reflectionTexture
	skybox.renderingGroupId = 0.0


	scene.environmentTexture = reflectionTexture

	skybox.material = skyboxMaterial

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
