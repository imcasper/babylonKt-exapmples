package casper.app

import babylon.BabylonUIScene
import casper.app.demo.TransformAnimationDemo
import casper.app.demo.createDrills
import casper.app.demo.createTileDemo
import casper.collection.map.MapUtil
import casper.collection.nextItem
import casper.geometry.SphericalCoordinate
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.basis.Box2d
import casper.geometry.polygon.Quad
import casper.gui.component.scroll.UIScroll
import casper.input.InputDispatcher
import casper.render.Environment
import casper.render.Light
import casper.render.Render
import casper.render.babylon.BabylonRender
import casper.render.extension.TextureUtil
import casper.render.extension.VerticesBuilder
import casper.render.material.FloatMapReference
import casper.render.material.Material
import casper.render.material.MaterialReference
import casper.render.material.TextureReference
import casper.render.model.SceneModel
import casper.render.model.SceneNode
import casper.render.vertex.Vertex
import casper.render.vertex.Vertices
import casper.render.vertex.VerticesReference
import casper.scene.camera.orbital.CameraSupport
import casper.scene.camera.orbital.OrbitalCameraInputSettings
import casper.scene.camera.orbital.OrbitalCameraSettings
import casper.scene.camera.orbital.SimpleOrbitalCamera
import casper.types.Color4d
import casper.util.AssetsStorage
import casper.util.atlas.Atlas
import kotlin.math.PI
import kotlin.random.Random

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

							uiScene.root += TransformAnimationDemo(uiScene, render, animationData).node

							createDrills(render, drillData)
							createAnimatedCube(render, templateBitmap)
							createTileDemo(render, albedoAtlas, specialAtlas)
						}
					}
				}
			}
		}
	}

	render.runRenderLoop()
}

