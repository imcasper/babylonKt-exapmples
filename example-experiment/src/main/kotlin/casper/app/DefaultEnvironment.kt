package casper.app

import BABYLON.Debug.AxesViewer
import BABYLON.DirectionalLight
import BABYLON.Scene
import BABYLON.SceneLoader
import BABYLON.Vector3
import babylon.BabylonUIScene
import casper.geometry.SphericalCoordinate
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
	val orbitalCamera = SimpleOrbitalCamera(scene, uiScene.sceneDispatcher, OrbitalCameraInputSettings(OrbitalCameraSettings(minRange = 2.0, maxRange = 1000.0), zoomSpeed = 2.5))
	orbitalCamera.orbitalController.setPosition(SphericalCoordinate(40.0, PI / 4f, 0.0))
	orbitalCamera.orbitalController.setPivot(Vector3d(0.0, 0.0, 0.0))
	scene.activeCamera = orbitalCamera.nativeCamera

	val sunLight = DirectionalLight("sun-light", Vector3(1.5, -0.5, -1.0).normalize(), scene)
	sunLight.intensity = 4.0

	AxesViewer(scene)
}
