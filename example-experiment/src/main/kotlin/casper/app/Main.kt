package casper.app

import BABYLON.*
import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.babylon.BabylonRender
import casper.render.extension.MaterialReplacer
import casper.render.material.ConstantColorReference
import casper.render.material.MaterialReference
import casper.render.node.Node
import casper.types.Color4d
import casper.util.AssetStorage
import casper.util.createCubeTextureFromPlane

fun createScene(render: Render, sceneData: SceneData) {
	val blueModel = MaterialReplacer.execute(sceneData.content, "Blue-drill") {
		if (it.name == "Paint2") {
			MaterialReference("Blue-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(0.0, 0.0, 1.0, 0.0))))
		} else null
	}

	val redModel = MaterialReplacer.execute(sceneData.content, "Red-drill") {
		if (it.name == "Paint2") {
			MaterialReference("Red-Paint", it.data.copy(albedo = ConstantColorReference("albedo", Color4d(1.0, 0.0, 0.0, 0.0))))
		} else null
	}


	for (x in 0 until 1) {
		for (y in 0 until 1) {
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
		scene.unfreezeActiveMeshes()

		val skyboxTexture = createCubeTextureFromPlane(scene, skyBoxBitmap, "skybox")
		scene.environmentTexture = skyboxTexture

		assets.getSceneFuture("drill.babylon").thenAccept { sceneData ->
			createScene(render, sceneData)
		}

	}

	render.runRenderLoop()
}