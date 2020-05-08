package casper.app

import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.extension.MaterialReplacer
import casper.render.material.ColorConstantReference
import casper.render.material.CubeTextureReference
import casper.render.material.MaterialReference
import casper.render.model.ModelTransform
import casper.render.model.TimeLine
import casper.types.Color4d


fun createDrills(render: Render, sceneData: SceneData, skyboxTexture: CubeTextureReference) {
	val blueModel = MaterialReplacer.execute(sceneData.model, "Blue-drill") {
		if (it.name == "Paint3") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(1.0, 0.0, 1.0, 0.0))), "Paint3-M")
		} else		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(0.0, 1.0, 1.0, 0.0))), "Paint2-M")
		} else		if (it.name == "Paint1") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(0.0, 0.0, 1.0, 0.0))), "Paint1-M")
		} else null
	}

	val redModel = MaterialReplacer.execute(sceneData.model, "Red-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(reflection = skyboxTexture, albedo = ColorConstantReference(Color4d(1.0, 0.0, 0.0, 0.0))), "Red-Paint")
		} else null
	}


	for (x in 0 until 8) {
		for (y in 0 until 8) {
			render.addChild(ModelTransform(
					Transform(position = Vector3d(x.toDouble() * 4.0, y.toDouble() * 4.0, 0.5), scale = Vector3d.ONE, rotation = Quaternion.IDENTITY),
					if (y == x) blueModel else redModel,
					TimeLine(speed = y * (x / 8.0 + 1.0))
			))
		}
	}
}
