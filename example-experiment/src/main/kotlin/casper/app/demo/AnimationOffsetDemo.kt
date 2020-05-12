package casper.app.demo

import casper.format.toPrecision
import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.gui.UIScene
import casper.gui.component.UIComponent
import casper.gui.component.scroll.UIScroll
import casper.gui.component.text.UIText
import casper.gui.layout.Layout
import casper.render.Render
import casper.render.SceneData
import casper.render.model.SceneNode
import casper.render.model.TimeLine
import kotlin.math.roundToInt

class AnimationOffsetDemo(uiScene: UIScene, val render: Render, sceneData: SceneData) : UIComponent(uiScene.createNode()) {
	val timeScroll = UIScroll.create(uiScene, false)
	val speedScroll = UIScroll.create(uiScene, false)

	val textNode = UIText.create(uiScene, "")
	val transform = SceneNode(
			Transform(position = Vector3d(5.0, 5.0, 5.0), scale = Vector3d.ONE, rotation = Quaternion.IDENTITY),
			sceneData.model,
			TimeLine()
	)

	init {
		node.layout = Layout.VERTICAL
		node += textNode.node.setSize(400, 60)
		node += timeScroll.node.setSize(400, 20)
		node += speedScroll.node.setSize(400, 20)

		transform.timeLine.timeScale = 0.0
		transform.timeLine.timeOffset = 0.0

		val animation = sceneData.model.children.firstOrNull()?.timeLine?.animations?.firstOrNull()
		val start = if (animation == null) 0.0 else animation.startTime
		val duration = if (animation == null) 0.0 else animation.duration

		timeScroll.logic.setMin(start)
		timeScroll.logic.setMax(start + duration)
		timeScroll.logic.setValue(0.0)
		timeScroll.logic.onValue.then {
			transform.timeLine.timeOffset = it
			updateInfo()
		}

		speedScroll.logic.setMin(-2.0)
		speedScroll.logic.setMax(2.0)
		speedScroll.logic.setValue(1.0)
		speedScroll.logic.onValue.then {
			val rounded = (it * 10.0).roundToInt() * 0.1
			transform.timeLine.timeScale = rounded
			updateInfo()
		}


		render.addChild(transform)
	}

	private fun updateInfo() {
		textNode.text = "offset: ${transform.timeLine.timeOffset.toPrecision(2)}\nspeed: ${transform.timeLine.timeScale.toPrecision(2)}"
	}

	override fun dispose() {
		render.removeChild(transform)
		super.dispose()
	}

}