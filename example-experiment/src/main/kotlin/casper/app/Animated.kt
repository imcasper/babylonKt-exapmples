package casper.app

import casper.collection.map.MapUtil
import casper.geometry.Matrix4d
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.polygon.Octagon
import casper.render.Render
import casper.render.extension.TextureUVAnimator
import casper.render.extension.VerticesBuilder
import casper.render.material.*
import casper.render.model.SceneModel
import casper.render.model.SceneNode
import casper.render.vertex.Vertex
import casper.types.Bitmap


fun createAnimatedCube(render: Render, templateBitmap: Bitmap) {
	val list = VerticesBuilder().add(
			Octagon(
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), uvMetallic = Vector2d(0.0, 0.0), position = Vector3d(0.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), uvMetallic = Vector2d(0.0, 1.0), position = Vector3d(0.0, 2.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), uvMetallic = Vector2d(1.0, 0.0), position = Vector3d(2.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 1.0), uvMetallic = Vector2d(1.0, 1.0), position = Vector3d(2.0, 2.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 1.0), uvMetallic = Vector2d(1.0, 1.0), position = Vector3d(0.0, 0.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), uvMetallic = Vector2d(1.0, 0.0), position = Vector3d(0.0, 2.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), uvMetallic = Vector2d(0.0, 1.0), position = Vector3d(2.0, 0.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), uvMetallic = Vector2d(0.0, 0.0), position = Vector3d(2.0, 2.0, 1.0))
			))
	val matrix = Matrix4d.translate(Vector3d(0.5, 0.5, 0.0))

	val albedoAnimated = TextureReference(templateBitmap, "animated", TextureTransform(matrix = matrix))
	val specialAnimated = TextureReference(templateBitmap, "animated", TextureTransform(matrix = matrix))

	val specialChannel = FloatMapReference(MapUtil.takeChannel(specialAnimated.data, 0), null, specialAnimated.transform)

	val material = Material(albedo = albedoAnimated, roughness = FloatConstantReference(0.95), metallic = specialChannel)
	render.addChild(SceneNode(model = SceneModel(list, material)))

	TextureUVAnimator(render, specialChannel.transform, Vector3d(1.0, 0.0, 0.0))


}