package casper.app

import casper.geometry.Matrix4d
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.polygon.Octagon
import casper.render.Render
import casper.render.extension.VerticesBuilder
import casper.render.material.FloatConstantReference
import casper.render.material.Material
import casper.render.material.TextureReference
import casper.render.model.Model
import casper.render.model.ModelTransform
import casper.render.vertex.Vertex
import casper.types.Bitmap


fun createAnimatedCube(render: Render, templateBitmap: Bitmap) {
	val list = VerticesBuilder().add(
			Octagon(
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), position = Vector3d(0.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), position = Vector3d(0.0, 2.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), position = Vector3d(2.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 1.0), position = Vector3d(2.0, 2.0, 0.0)),

					Vertex(uvAlbedo = Vector2d(1.0, 1.0), position = Vector3d(0.0, 0.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), position = Vector3d(0.0, 2.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), position = Vector3d(2.0, 0.0, 1.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), position = Vector3d(2.0, 2.0, 1.0))
			))
	val transform = Matrix4d.translate(Vector3d(0.5, 0.5, 0.0))
	val albedoAnimated = TextureReference(templateBitmap, "animated", transform)
	val material = Material(albedo = albedoAnimated, roughness = FloatConstantReference(0.95), metallic = FloatConstantReference(0.0))
	render.addChild(ModelTransform(model = Model(list, material)))


	var time = 0.0
	render.nextFrameFuture.then {
		time += it
		albedoAnimated.transform = Matrix4d.translate(Vector3d(time * 0.01, 0.0, 0.0))
	}
}