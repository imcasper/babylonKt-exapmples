package casper.app

import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.Transform
import casper.render.animation.Animations
import casper.render.extension.MaterialReplacer
import casper.render.material.ColorConstantReference
import casper.render.material.CubeTextureReference
import casper.render.material.MaterialReference
import casper.render.node.Node
import casper.types.Color4d


fun createDrills(render: Render, sceneData: SceneData, skyboxTexture: CubeTextureReference) {
	val blueModel = MaterialReplacer.execute(sceneData.content, "Blue-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(0.0, 0.0, 1.0, 0.0))), "Blue-Paint")
		} else null
	}

	val redModel = MaterialReplacer.execute(sceneData.content, "Red-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(1.0, 0.0, 0.0, 0.0))), "Red-Paint")
		} else null
	}


	for (x in 0 until 2) {
		for (y in 0 until 2) {
			render.addNode(Node(
					Transform(position = Vector3d(x.toDouble() * 4.0, y.toDouble() * 4.0, 0.5)),
					if (y == x) blueModel else redModel,
					Animations(true, (x / 8.0 + 1.0), emptyList())
			))
		}
	}
}
