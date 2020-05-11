package casper.app

import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.render.Render
import casper.render.SceneData
import casper.render.model.ModelTransform
import casper.render.model.TimeLine

fun createWarehouses(render: Render, sceneData: SceneData) {
	val original = sceneData.model

	val animation = original.children.firstOrNull()?.timeLine?.animations?.firstOrNull()
	val start = if (animation == null) 0.0 else animation.startTime
	val duration = if (animation == null) 0.0 else animation.duration

	val size = 20
	for (y in 0 until size) {

		val transform = ModelTransform(
				Transform(position = Vector3d(20.0, y.toDouble() * 2.0, 0.5), scale = Vector3d.ONE, rotation = Quaternion.IDENTITY),
				original,
				TimeLine()
		)

		transform.timeLine.timeScale = 0.0
		transform.timeLine.timeOffset = start + duration * y / (size - 1).toDouble()

		render.addChild(transform)
	}
}
