package casper.app.demo

import casper.app.getTextureRegion
import casper.collection.map.MapUtil
import casper.collection.nextItem
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.basis.Box2d
import casper.geometry.polygon.Quad
import casper.render.babylon.BabylonRender
import casper.render.extension.VerticesBuilder
import casper.render.material.FloatMapReference
import casper.render.material.Material
import casper.render.material.MaterialReference
import casper.render.material.TextureReference
import casper.render.model.SceneModel
import casper.render.model.SceneNode
import casper.render.model.TimeLine
import casper.render.vertex.Vertex
import casper.render.vertex.Vertices
import casper.render.vertex.VerticesReference
import casper.util.atlas.Atlas
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

fun createTiles(size: Int, pivot: Vector3d, tiles:List<TileInfo>): Vertices {


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

fun createTileDemo(render: BabylonRender, albedoAtlas: Atlas, specialAtlas: Atlas) {
	val tiles = listOf(
			TileInfo.create(albedoAtlas, specialAtlas, "rock"),
			TileInfo.create(albedoAtlas, specialAtlas, "sand"),
			TileInfo.create(albedoAtlas, specialAtlas, "soil"),
			TileInfo.create(albedoAtlas, specialAtlas, "water")
	)

	val albedoPage = albedoAtlas.pages.values.first()
	val albedo = TextureReference(albedoPage.bitmap, "atlas-albedo")

	val specialPage = specialAtlas.pages.values.first()
	val special = TextureReference(specialPage.bitmap, "atlas-special")

	val roughness = MapUtil.takeChannel(special.data, 1)
	val metallic = MapUtil.takeChannel(special.data, 2)
	val material = MaterialReference(name = "atlas", data = Material(albedo = albedo, roughness = FloatMapReference(roughness), metallic = FloatMapReference(metallic)))

	val size = 64
	for (s in 0 until size) {
		for (t in 0 until size) {
			val vertices = createTiles(1, Vector3d((s ).toDouble(), (t ).toDouble(), 0.0), tiles)
			render.addChild(SceneNode(model = SceneModel(VerticesReference(vertices), material, "tile"), timeLine = TimeLine(timeScale = 0.0)))
		}
	}

}
