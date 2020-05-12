package casper.app

import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.extension.MaterialReplacer
import casper.render.extension.ModelSimplifier
import casper.render.material.ColorConstantReference
import casper.render.material.Material
import casper.render.material.MaterialReference
import casper.render.model.SceneNode
import casper.render.model.TimeLine
import casper.types.Color4d

fun createDrills(render: Render, sceneData: SceneData) {
	val original = sceneData.model

	val blueModel = ModelSimplifier.execute(MaterialReplacer.execute(original, "Blue-drill") {
		if (it.name == "Paint3") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(1.0, 0.0, 1.0, 0.0))), "Paint3-M")
		} else if (it.name == "Paint2") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(0.0, 1.0, 1.0, 0.0))), "Paint2-M")
		} else if (it.name == "Paint1") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(0.0, 0.0, 1.0, 0.0))), "Paint1-M")
		} else null
	})

	val redModel = ModelSimplifier.execute(MaterialReplacer.execute(original, "Red-drill") {
		if (it.name == "Paint2") {
			MaterialReference(it.data.copy(albedo = ColorConstantReference(Color4d(1.0, 0.0, 0.0, 0.0))), "Red-Paint")
		} else null
	})

	val wireFrameModel = ModelSimplifier.execute(MaterialReplacer.execute(original, "WireFrame-drill") {
		MaterialReference(Material(wireFrame = true))
	})


	val size = 4
	for (x in 0 until size) {
		for (y in 0 until size) {
			val wireframe = x == size - y

			val model = if (wireframe) wireFrameModel else if (y == x) blueModel else redModel
			val node = SceneNode(
					Transform(position = Vector3d(x.toDouble() * 2.0, y.toDouble() * 2.0, 0.5), scale = Vector3d.ONE, rotation = Quaternion.IDENTITY),
					model,
					TimeLine()
			)

			val speed = if (x == y) 0.0 else if (x == size - y) -1.0 else (x + 1) / size.toDouble() + (y + 1) / size.toDouble() / size.toDouble()
			node.timeLine.timeScale = speed

			render.addChild(node)
		}
	}
}
