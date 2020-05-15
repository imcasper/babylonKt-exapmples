package casper.app.demo

import casper.format.toPrecision
import casper.geometry.Quaternion
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.gui.UIScene
import casper.gui.component.UIComponent
import casper.gui.component.button.UIButton
import casper.gui.component.panel.UIPanel
import casper.gui.component.scroll.UIScroll
import casper.gui.component.text.UIText
import casper.gui.component.toggle.UIToggleWithLabel
import casper.gui.layout.Layout
import casper.render.Render
import casper.render.SceneData
import casper.render.model.AnimationPlayMode
import casper.render.model.SceneNode
import casper.render.model.TimeLine
import casper.signal.util.then
import kotlin.math.roundToInt

class TransformAnimationDemo(uiScene: UIScene, val render: Render, sceneData: SceneData) : UIComponent(uiScene.createNode()) {
	val timeScroll = UIScroll.create(uiScene, false)
	val speedScroll = UIScroll.create(uiScene, false)

	private var frameTime = 0.0
	val textNode = UIText.create(uiScene, "")
	val simpleAnimation = SceneNode(
			Transform(position = Vector3d(0.0, -8.0, 0.0), scale = Vector3d.ONE, rotation = Quaternion.IDENTITY),
			sceneData.model,
			TimeLine()
	)

	val customAnimation = SceneNode()

	init {

		customAnimation.addChild(SceneNode(Transform(position = Vector3d(4.0, 0.0, 0.0)), model = sceneData.model))
		var angle = 0.0
		render.nextTimeFuture.then {
			angle += it
			customAnimation.transform = Transform(position = Vector3d(0.0, -8.0, 4.0), rotation = Quaternion.fromAxisAnge(Vector3d.Z, angle))
		}

		UIPanel(node)
		node.layout = Layout.VERTICAL
		node += textNode.node.setSize(400, 60)
		node += timeScroll.node.setSize(800, 20)
		node += speedScroll.node.setSize(400, 20)
		node += UIToggleWithLabel.create(uiScene, UIText.create(uiScene, "show"), true, {
			update(it)
		}).node

		node += 		UIButton.createWithText(uiScene, "clamp") {
			simpleAnimation.setPlayMode(AnimationPlayMode.CLAMP)
		}.node.setSize(80, 30)
		node += 		UIButton.createWithText(uiScene, "wrap") {
			simpleAnimation.setPlayMode(AnimationPlayMode.WRAP)
		}.node.setSize(80, 30)
		node += 		UIButton.createWithText(uiScene, "mirror") {
			simpleAnimation.setPlayMode(AnimationPlayMode.MIRROR)
		}.node.setSize(80, 30)


		timeScroll.logic.setMin(-10.0)
		timeScroll.logic.setMax(20.0)
		timeScroll.logic.onValue.then {
			val rounded = (it * 20.0).roundToInt() * 0.05
			simpleAnimation.setTimeOffset(rounded)
			updateInfo()
		}

		speedScroll.logic.setMin(-2.0)
		speedScroll.logic.setMax(5.0)
		speedScroll.logic.onValue.then {
			val rounded = (it * 20.0).roundToInt() * 0.05
			simpleAnimation.setPlaySpeed(rounded)
			updateInfo()
		}

		timeScroll.logic.setValue(0.0)
		speedScroll.logic.setValue(1.0)

		render.addChild(simpleAnimation)
		uiScene.onFrame.then(components) {
			frameTime = frameTime * 0.9 + 0.1 * it.toDouble()
			updateInfo()
		}
	}

	private fun update(show:Boolean) {
		if (show) {
			render.addChild(simpleAnimation)
			render.addChild(customAnimation)
		} else {
			render.removeChild(simpleAnimation)
			render.removeChild(customAnimation)
		}
	}

	private fun updateInfo() {
		textNode.text = "frameTime: ${frameTime.toPrecision(1)} ms\n time offset: ${(simpleAnimation.timeLine.timeOffset).toPrecision(2)} sec\nspeed: ${simpleAnimation.timeLine.timeScale.toPrecision(2)}"
	}

	override fun dispose() {
		render.removeChild(simpleAnimation)
		super.dispose()
	}

}