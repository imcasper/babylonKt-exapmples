package casper.app

import casper.collection.nextItem
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.basis.Box2d
import casper.geometry.polygon.Quad
import casper.render.Environment
import casper.render.ModelReference
import casper.render.Render
import casper.render.babylon.BabylonRender
import casper.render.material.FloatConstantReference
import casper.render.material.Material
import casper.render.material.MaterialReference
import casper.render.material.TextureReference
import casper.render.node.Content
import casper.render.node.Node
import casper.render.vertex.Vertex
import casper.render.vertex.VerticesReference
import casper.types.Color4d
import casper.util.AssetStorage
import casper.util.VerticesBuilder
import casper.util.atlas.Atlas
import casper.util.createCubeTextureFromPlane
import kotlin.random.Random

fun createTiles(render: Render, size: Int, pivot: Vector3d, multiMaterial: MaterialReference, regions: List<Box2d>) {

	val random = Random(pivot.hashCode())

	val builder = VerticesBuilder()

	for (x in 0 until size) {
		for (y in 0 until size) {
			val region = random.nextItem(regions) ?: continue

			val relativePivot = Vector3d(x.toDouble(), y.toDouble(), 0.0)
			builder.add(Quad(
					Vertex(relativePivot + pivot + Vector3d(0.0, 1.0, 0.0), uv = Vector2d(region.min.x, region.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 1.0, 0.0), uv = Vector2d(region.max.x, region.max.y)),
					Vertex(relativePivot + pivot + Vector3d(1.0, 0.0, 0.0), uv = Vector2d(region.max.x, region.min.y)),
					Vertex(relativePivot + pivot + Vector3d(0.0, 0.0, 0.0), uv = Vector2d(region.min.x, region.min.y))
			))
		}
	}
	render.addNode(Node(content = Content(ModelReference(VerticesReference(builder.get()), multiMaterial), name = "tile")))
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

	assets.getAtlasFuture("albedo.atlas").thenAccept { atlas ->
		assets.getBitmapFuture("rock.png").thenAccept { rockBitmap ->
			assets.getBitmapFuture("sand.png").thenAccept { sandBitmap ->
				assets.getBitmapFuture("soil.png").thenAccept { soilBitmap ->
					assets.getBitmapFuture("water.png").thenAccept { waterBitmap ->
						assets.getBitmapFuture("skybox_hdr.png").thenAccept { skyBoxBitmap ->
							assets.getBitmapFuture("template.png").thenAccept { templateBitmap ->

								val skyboxTexture = createCubeTextureFromPlane(skyBoxBitmap, "skybox")
								render.environment = Environment(
										Color4d(0.1, 0.5, 0.8, 1.0),
										skyboxTexture,
										true
								)
								val page = atlas.pages.values.first()

								val multiMaterial = MaterialReference(name = "atlas", data = Material(albedo = TextureReference(page.bitmap, "atlas"), roughness = FloatConstantReference(0.8), metallic = FloatConstantReference(0.0)))

								val regions = listOf(
										atlas.getTextureRegion("rock")!!,
										atlas.getTextureRegion("sand")!!,
										atlas.getTextureRegion("soil")!!,
										atlas.getTextureRegion("water")!!
								)

//								val materials = listOf(
//										MaterialReference(name = "tile-rock", data = Material(albedo = TextureReference(rockBitmap, "tile-rock"), roughness = FloatConstantReference(0.8), metallic = FloatConstantReference(0.0))),
//										MaterialReference(name = "tile-sand", data = Material(albedo = TextureReference(sandBitmap, "tile-sand"), roughness = FloatConstantReference(1.0), metallic = FloatConstantReference(0.0))),
//										MaterialReference(name = "tile-soil", data = Material(albedo = TextureReference(soilBitmap, "tile-soil"), roughness = FloatConstantReference(1.0), metallic = FloatConstantReference(0.0))),
//										MaterialReference(name = "tile-water", data = Material(albedo = TextureReference(waterBitmap, "tile-water"), roughness = FloatConstantReference(0.0), metallic = FloatConstantReference(0.0))))

								assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
									createDrills(render, sceneData, skyboxTexture)
									createAnimatedCube(render, templateBitmap)

									for (s in 0 until 4) {
										for (t in 0 until 4) {
											val size = 4
											createTiles(render, size, Vector3d((s * size).toDouble(), (t * size).toDouble(), 0.0), multiMaterial, regions)
										}
									}
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