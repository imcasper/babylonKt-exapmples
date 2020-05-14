package casper.app

import babylon.BabylonUIScene
import casper.app.demo.AnimationDemo
import casper.app.demo.DrillsDemo
import casper.app.demo.createTileDemo
import casper.collection.observableListOf
import casper.geometry.SphericalCoordinate
import casper.geometry.Vector2d
import casper.geometry.Vector2i
import casper.geometry.Vector3d
import casper.geometry.basis.Box2d
import casper.gui.component.tab.UITab
import casper.gui.component.tab.UITabMenu
import casper.input.InputDispatcher
import casper.render.Environment
import casper.render.Light
import casper.render.Render
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

fun Atlas.getTextureRegion(name: String): Box2d? {
	val (page, region) = this.getRegion(name) ?: return null


	val pageSize = page.info.size
	val pageSizeInv = Vector2d(1.0 / pageSize.x, 1.0 / pageSize.y)
	val start = (region.box.min).toVector2d()
	val finish = (region.box.min + region.box.dimension).toVector2d()
	return Box2d(start * pageSizeInv, finish * pageSizeInv)
}

fun createCamera(render: Render, inputDispatcher: InputDispatcher) {
	val support = CameraSupport(render.nextTimeFuture, { render.viewport }, inputDispatcher)
	val orbitalCamera = SimpleOrbitalCamera(support, OrbitalCameraInputSettings(zoomSpeed = 2.5), OrbitalCameraSettings(minRange = 2.0, maxRange = 1000.0)) {
		render.camera = it
	}
	orbitalCamera.orbitalController.setPosition(SphericalCoordinate(40.0, PI / 4f, 0.0))
	orbitalCamera.orbitalController.setPivot(Vector3d(0.0, 0.0, 0.0))

}


fun main() {
	val render = BabylonRender.create("renderCanvas")
	val uiScene = BabylonUIScene(render.nativeScene)
	val assets = AssetsStorage(render.nativeScene)

	createStyle(uiScene)
	createCamera(render, uiScene.dispatcher)

	assets.getAtlasFuture("albedo.atlas").thenAccept { albedoAtlas ->
		assets.getAtlasFuture("special.atlas").thenAccept { specialAtlas ->
			assets.getBitmapFuture("skybox_hdr.png").thenAccept { skyBoxBitmap ->
				assets.getBitmapFuture("template.png").thenAccept { templateBitmap ->

					val skyboxTexture = TextureUtil.createCubeFromPlane(skyBoxBitmap, "skybox")
					render.environment = Environment(
							Color4d(0.1, 0.5, 0.8, 1.0),
							skyboxTexture,
							Light(Vector3d(-1.5, -0.5, -0.5), 2.0),
							true
					)

					assets.getSceneFuture("animation.babylon").thenAccept { animationData ->
						assets.getSceneFuture("drill.babylon").thenAccept { drillData ->

							val tabs = observableListOf(
									UITab.createWithText(uiScene, "animation", Vector2i(100, 30), AnimationDemo(uiScene, render, animationData).node),
									UITab.createWithText(uiScene, "drills", Vector2i(100, 30), DrillsDemo(uiScene, render, drillData).node)
							)


							val tabMenu = UITabMenu.create(uiScene, tabs = tabs)
							uiScene.root += tabMenu.node

							createAnimatedCube(render, templateBitmap)
//							createTileDemo(render, albedoAtlas, specialAtlas)
						}
					}
				}
			}
		}
	}

	render.runRenderLoop()
}

