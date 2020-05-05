package casper.app

import casper.geometry.Matrix4d
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRender
import casper.render.extension.MaterialReplacer
import casper.render.material.*
import casper.render.node.Content
import casper.render.node.Node
import casper.render.vertex.Vertex
import casper.types.Bitmap
import casper.types.Color4d
import casper.util.AssetStorage
import casper.util.createCubeTextureFromPlane

fun createVertex(render: Render, templateBitmap: Bitmap) {
	val list = listOf(
			Vertex(uv = Vector2d(0.0, 0.0), position = Vector3d(0.0, 0.0, 0.0)),
			Vertex(uv = Vector2d(0.0, 1.0), position = Vector3d(0.0, 10.0, 0.0)),
			Vertex(uv = Vector2d(1.0, 1.0), position = Vector3d(10.0, 1.0, 0.0))
	)
	val transform = Matrix4d.translate(Vector3d(0.5, 0.5, 0.0))
	val albedoAnimated = ColorMapReference(templateBitmap, "animated", transform)
	val material = Material(albedo = albedoAnimated, roughness = FloatConstantReference(0.95), metallic = FloatConstantReference(0.0))
	render.addNode(Node(content = Content(list, material)))


	var time = 0.0
	render.nextFrameFuture.then {
		time += it
		albedoAnimated.transform =  Matrix4d.translate(Vector3d(time * 0.01, 0.0, 0.0))
	}
}

fun createDrills(render: Render, sceneData: SceneData) {
	val blueModel = MaterialReplacer.execute(sceneData.content, "Blue-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(0.0, 0.0, 1.0, 0.0))), "Blue-Paint")
		} else null
	}

	val redModel = MaterialReplacer.execute(sceneData.content, "Red-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(1.0, 0.0, 0.0, 0.0))), "Red-Paint")
		} else null
	}


	for (x in 0 until 2) {
		for (y in 0 until 2) {
			render.addNode(Node(
					Transform(position = Vector3d(x.toDouble(), y.toDouble(), 0.0) * 4.0),
					if (y == x) blueModel else redModel,
					Animations(true, (x / 8.0 + 1.0), emptyList())
			))
		}
	}
}

fun main() {
	val render = BabylonRender.create("renderCanvas")
	val assets = AssetStorage(render.nativeScene)

	createDefaultScene(render.nativeScene)

	val scene = render.nativeScene

	assets.getBitmapFuture("skybox_hdr.png").thenAccept { skyBoxBitmap ->
		assets.getBitmapFuture("template.png").thenAccept { templateBitmap ->

			val skyboxTexture = createCubeTextureFromPlane(scene, skyBoxBitmap, "skybox")
			scene.environmentTexture = skyboxTexture

			assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
				createDrills(render, sceneData)
				createVertex(render, templateBitmap)
			}

		}
	}

	render.runRenderLoop()
}