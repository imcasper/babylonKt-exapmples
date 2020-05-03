package casper.app

import BABYLON.*
import BABYLON.extension.createScene
import babylon.BabylonUIScene
import casper.geometry.Vector3d
import casper.scene.camera.orbital.OrbitalCameraInputSettings
import casper.scene.camera.orbital.OrbitalCameraSettings
import casper.scene.camera.orbital.SimpleOrbitalCamera
import casper.util.Inspector
import kotlin.math.PI

fun createDefaultScene(scene: Scene) {
	SceneLoader.ShowLoadingScreen = false

	Inspector(scene)

	scene.useRightHandedSystem = true

	val uiScene = BabylonUIScene(scene)
	val orbitalCamera = SimpleOrbitalCamera(scene, uiScene.sceneDispatcher, OrbitalCameraInputSettings(OrbitalCameraSettings(minRange = 2.0, maxRange = 45.0), zoomSpeed = 0.5))
	orbitalCamera.orbitalController.setPivot(Vector3d(0.0, 0.0, 0.0))
	scene.activeCamera = orbitalCamera.nativeCamera

	val sunLight = DirectionalLight("sun-light", Vector3(1.5, -0.5, -1.0).normalize(), scene)
	sunLight.intensity = 4.0

	val reflectionTexture = CubeTexture("environment.dds", scene, prefiltered = false, createPolynomials = false)
	reflectionTexture.coordinatesMode = Texture.SKYBOX_MODE
	reflectionTexture.setReflectionTextureMatrix(Matrix.RotationX(-PI * 0.5))

	scene.createDefaultSkybox(reflectionTexture)
	scene.environmentTexture = reflectionTexture
}