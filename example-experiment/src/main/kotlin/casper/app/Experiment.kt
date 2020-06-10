package casper.app

import babylon.BabylonUIScene
import casper.app.demo.ModelLoader
import casper.app.demo.TextureAnimationDemo
import casper.app.demo.TransformAnimationDemo
import casper.app.demo.createTileDemo
import casper.collection.observableListOf
import casper.geometry.*
import casper.geometry.basis.Box2d
import casper.geometry.basis.Box3d
import casper.gui.UIScene
import casper.gui.component.tab.UITab
import casper.gui.component.tab.UITabMenu
import casper.input.InputDispatcher
import casper.loader.BitmapReference
import casper.render.Environment
import casper.render.Light
import casper.render.Render
import casper.render.SceneData
import casper.render.babylon.BabylonRender
import casper.render.extension.TextureUtil
import casper.scene.camera.orbital.CameraSupport
import casper.scene.camera.orbital.OrbitalCameraInputSettings
import casper.scene.camera.orbital.OrbitalCameraSettings
import casper.scene.camera.orbital.SimpleOrbitalCamera
import casper.types.Color4d
import casper.util.AssetsStorage
import casper.util.atlas.Atlas
import kotlin.math.PI


fun main() {
	val render = BabylonRender.create("renderCanvas")
	val uiScene = BabylonUIScene(render.nativeScene, false)
	val assets = AssetsStorage(render.nativeScene)
	createStyle(uiScene)
	createCamera(render, uiScene.dispatcher)


	assets.getAtlasFuture("albedo.atlas").thenAccept { albedoAtlas ->
		assets.getAtlasFuture("special.atlas").thenAccept { specialAtlas ->
			assets.getBitmapFuture("skybox_hdr.png").thenAccept { skyBoxBitmap ->
				assets.getBitmapFuture("template.png").thenAccept { templateBitmap ->
					assets.getSceneFuture("models/animation.gltf").thenAccept { animationData ->
						try {
							buildScene(assets, render, uiScene, skyBoxBitmap, animationData, templateBitmap)
							createTileDemo(render, albedoAtlas, specialAtlas)
						} catch (error: Throwable) {
							println(error.message)
						}
					}
				}
			}
		}
	}

	render.runRenderLoop()
}

fun Atlas.getTextureRegion(name: String): Box2d? {
	val (page, region) = this.getRegion(name) ?: return null


	val pageSize = page.info.size
	val pageSizeInv = Vector2d(1.0 / pageSize.x, 1.0 / pageSize.y)
	val start = (region.box.min).toVector2d()
	val finish = (region.box.min + region.box.dimension).toVector2d()
	return Box2d(start * pageSizeInv, finish * pageSizeInv)
}

fun createCamera(render: Render, inputDispatcher: InputDispatcher) {
	val support = CameraSupport(render.nextTimeFuture, { render.camera.viewport }, inputDispatcher)
	val orbitalCamera = SimpleOrbitalCamera(support, OrbitalCameraInputSettings(zoomSpeed = 2.5), OrbitalCameraSettings(minRange = 2.0, maxRange = 1000.0, pivotBox = Box3d(Vector3d(-16.0), Vector3d(16.0)))) {
		render.camera.transform = it
	}
	orbitalCamera.orbitalController.setPosition(SphericalCoordinate(40.0, PI / 4f, 0.0))
	orbitalCamera.orbitalController.setPivot(Vector3d(0.0, 0.0, 0.0))

}


fun buildScene(assets: AssetsStorage, render: Render, uiScene: UIScene, skyBoxBitmap: BitmapReference, animationData: SceneData, templateBitmap: BitmapReference) {
	val skyboxTexture = TextureUtil.createCubeFromPlane(skyBoxBitmap.data, skyBoxBitmap.name)
	render.environment = Environment(
			Color4d(0.1, 0.5, 0.8, 1.0),
			skyboxTexture,
			Light(Vector3d(-1.5, -0.5, -0.5), 2.0),
			true
	)
	val tabs = observableListOf(
			UITab.createWithText(uiScene, "transform-anim", Vector2i(160, 30), TransformAnimationDemo(uiScene, render, animationData).node),
			UITab.createWithText(uiScene, "texture-anim", Vector2i(160, 30), TextureAnimationDemo(uiScene, render, templateBitmap).node),
			UITab.createWithText(uiScene, "drills", Vector2i(160, 30), ModelLoader(uiScene, assets, render, "models/drill.gltf", Transform(position = Vector3d(8.0, 0.0, 0.0))).node),
			UITab.createWithText(uiScene, "builder", Vector2i(160, 30), ModelLoader(uiScene, assets, render, "models/robot_builder.gltf", Transform(position = Vector3d(12.0, 0.0, 0.0))).node),
			UITab.createWithText(uiScene, "truck", Vector2i(160, 30), ModelLoader(uiScene, assets, render, "models/robot_truck.gltf", Transform(position = Vector3d(16.0, 0.0, 0.0))).node),
			UITab.createWithText(uiScene, "pump", Vector2i(160, 30), ModelLoader(uiScene, assets, render, "models/pump.gltf", Transform(position = Vector3d(4.0, 0.0, 0.0))).node)
	)


	val tabMenu = UITabMenu.create(uiScene, tabs = tabs)
	uiScene.root += tabMenu.node
}

