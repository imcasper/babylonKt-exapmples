package casper.app

import casper.collection.map.MapUtil
import casper.collection.nextItem
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.basis.Box2d
import casper.geometry.polygon.Quad
import casper.render.Environment
import casper.render.ModelReference
import casper.render.babylon.BabylonRender
import casper.render.material.*
import casper.render.node.Content
import casper.render.node.Node
import casper.render.vertex.Vertex
import casper.render.vertex.Vertices
import casper.render.vertex.VerticesReference
import casper.types.Color4d
import casper.util.AssetStorage
import casper.util.VerticesBuilder
import casper.util.atlas.Atlas
import casper.util.createCubeTextureFromPlane
import kotlin.random.Random

data class TileInfo(val albedo:Box2d, val special:Box2d)

fun createTiles(size: Int, pivot: Vector3d, tiles: List<TileInfo>): Vertices {

	val random = Random(pivot.hashCode())

	val builder = VerticesBuilder()

	for (x in 0 until size) {
		for (y in 0 until size) {
			val tile = random.nextItem(tiles) ?: continue

			val relativePivot = Vector3d(x.toDouble(), y.toDouble(), 0.0)
			val albedo = tile.albedo
			val special = tile.special
			builder.add(Quad(
					Vertex(relativePivot + pivot + Vector3d(0.0, 1.0, 0.0), uv = Vector2d(albedo.min.x, albedo.max.y),uv2 = Vector2d(special.min.x, special.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 1.0, 0.0), uv = Vector2d(albedo.max.x, albedo.max.y),uv2 = Vector2d(special.max.x, special.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 0.0, 0.0), uv = Vector2d(albedo.max.x, albedo.min.y),uv2 = Vector2d(special.max.x, special.min.y)),
					Vertex(relativePivot + pivot + Vector3d(0.0, 0.0, 0.0), uv = Vector2d(albedo.min.x, albedo.min.y),uv2 = Vector2d(special.min.x, special.min.y))
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


fun main() {
	val render = BabylonRender.create("renderCanvas")
	val assets = AssetStorage(render.nativeScene)

	createDefaultScene(render.nativeScene)

	assets.getAtlasFuture("albedo.atlas").thenAccept { albedoAtlas ->
		assets.getAtlasFuture("special.atlas").thenAccept { specialAtlas ->
			assets.getBitmapFuture("skybox_hdr.png").thenAccept { skyBoxBitmap ->
				assets.getBitmapFuture("template.png").thenAccept { templateBitmap ->

					val skyboxTexture = createCubeTextureFromPlane(skyBoxBitmap, "skybox")
					render.environment = Environment(
							Color4d(0.1, 0.5, 0.8, 1.0),
							skyboxTexture,
							true
					)
					val page = albedoAtlas.pages.values.first()
					val special =  TextureReference(page.bitmap, "atlas-special")
					val roughness = MapUtil.takeChannel(special.data, 1)
					val metallic = MapUtil.takeChannel(special.data, 2)
					val material = MaterialReference(name = "atlas", data = Material(albedo = TextureReference(page.bitmap, "atlas-albedo"), roughness = FloatMapReference(roughness), metallic = FloatMapReference(metallic)))

					val tiles = listOf(
							TileInfo(albedoAtlas.getTextureRegion("rock")!!,specialAtlas.getTextureRegion("rock-m")!!),
							TileInfo(albedoAtlas.getTextureRegion("sand")!!,specialAtlas.getTextureRegion("sand-m")!!),
							TileInfo(albedoAtlas.getTextureRegion("soil")!!,specialAtlas.getTextureRegion("soil-m")!!),
							TileInfo(albedoAtlas.getTextureRegion("water")!!,specialAtlas.getTextureRegion("water-m")!!)
					)

					assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
						createDrills(render, sceneData, skyboxTexture)
						createAnimatedCube(render, templateBitmap)

						for (s in 0 until 8) {
							for (t in 0 until 8) {
								val size = 8
								val vertices = createTiles(size, Vector3d((s * size).toDouble(), (t * size).toDouble(), 0.0), tiles)
								render.addNode(Node(content = Content(ModelReference(VerticesReference(vertices), material), name = "tile")))
							}
						}
					}

				}
			}
		}
	}

	render.runRenderLoop()
}