package casper.app

import babylon.BabylonUIScene
import casper.app.demo.TransformAnimationDemo
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

data class TileInfo(val albedo: Box2d, val metallic: Box2d, val roughness: Box2d) {
	companion object {
		fun create(albedoAtlas: Atlas, specialAtlas: Atlas, name: String): TileInfo {
			return TileInfo(
					albedoAtlas.getTextureRegion(name)!!,
					specialAtlas.getTextureRegion("$name-m")!!,
					specialAtlas.getTextureRegion("$name-m")!!
			)
		}
	}
}

fun createTiles(size: Int, pivot: Vector3d, tiles: List<TileInfo>): Vertices {

	val random = Random(pivot.hashCode())

	val builder = VerticesBuilder()

	for (x in 0 until size) {
		for (y in 0 until size) {
			val tile = random.nextItem(tiles) ?: continue

			val relativePivot = Vector3d(x.toDouble(), y.toDouble(), 0.0)
			val albedo = tile.albedo
			val metallic = tile.metallic
			val roughness = tile.roughness
			builder.add(Quad(
					Vertex(relativePivot + pivot + Vector3d(0.0, 1.0, 0.0), uvAlbedo = Vector2d(albedo.min.x, albedo.max.y), uvMetallic = Vector2d(metallic.min.x, metallic.max.y), uvRoughness = Vector2d(roughness.min.x, roughness.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 1.0, 0.0), uvAlbedo = Vector2d(albedo.max.x, albedo.max.y), uvMetallic = Vector2d(metallic.max.x, metallic.max.y), uvRoughness = Vector2d(roughness.max.x, roughness.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 0.0, 0.0), uvAlbedo = Vector2d(albedo.max.x, albedo.min.y), uvMetallic = Vector2d(metallic.max.x, metallic.min.y), uvRoughness = Vector2d(roughness.max.x, roughness.min.y)),
					Vertex(relativePivot + pivot + Vector3d(0.0, 0.0, 0.0), uvAlbedo = Vector2d(albedo.min.x, albedo.min.y), uvMetallic = Vector2d(metallic.min.x, metallic.min.y), uvRoughness = Vector2d(roughness.min.x, roughness.min.y))
			))
		}
	}
	return builder.get()
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
					val albedoPage = albedoAtlas.pages.values.first()
					val albedo = TextureReference(albedoPage.bitmap, "atlas-albedo")

					val specialPage = specialAtlas.pages.values.first()
					val special = TextureReference(specialPage.bitmap, "atlas-special")

					val roughness = MapUtil.takeChannel(special.data, 1)
					val metallic = MapUtil.takeChannel(special.data, 2)
					val material = MaterialReference(name = "atlas", data = Material(albedo = albedo, roughness = FloatMapReference(roughness), metallic = FloatMapReference(metallic)))

					val tiles = listOf(
							TileInfo.create(albedoAtlas, specialAtlas, "rock"),
							TileInfo.create(albedoAtlas, specialAtlas, "sand"),
							TileInfo.create(albedoAtlas, specialAtlas, "soil"),
							TileInfo.create(albedoAtlas, specialAtlas, "water")
					)

					assets.getSceneFuture("animation.babylon").thenAccept { animationData ->
						assets.getSceneFuture("drill.babylon").thenAccept { drillData ->

							uiScene.root += TransformAnimationDemo(uiScene, render, animationData).node

							createDrills(render, drillData)
							createAnimatedCube(render, templateBitmap)

							val size = 8
							for (s in 0 until size) {
								for (t in 0 until size) {
									val vertices = createTiles(size, Vector3d((s * size).toDouble(), (t * size).toDouble(), 0.0), tiles)
									render.addChild(SceneNode(model = SceneModel(VerticesReference(vertices), material, name = "tile")))
								}
							}
						}
					}
				}
			}
		}
	}

	render.runRenderLoop()
}