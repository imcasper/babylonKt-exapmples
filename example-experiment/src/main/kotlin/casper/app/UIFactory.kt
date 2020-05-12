package casper.app

import casper.geometry.Vector2d
import casper.geometry.Vector2i
import casper.gui.UINode
import casper.gui.UIScene
import casper.gui.component.UIImage
import casper.gui.component.UITimer
import casper.gui.component.bar.ProgressBarStyle
import casper.gui.component.bar.UIProgressBar
import casper.gui.component.box.ScrollBoxBorderProperty
import casper.gui.component.button.ButtonBackgroundStyle
import casper.gui.component.button.ButtonStyle
import casper.gui.component.panel.PanelProperty
import casper.gui.component.panel.UIPanel
import casper.gui.component.scroll.ScrollLogic
import casper.gui.component.scroll.ScrollStyle
import casper.gui.component.scroll.UIScrollBox
import casper.gui.component.tab.TabMenuStyle
import casper.gui.component.text.TextAlignProperty
import casper.gui.component.text.TextFormatProperty
import casper.gui.component.text.TextInputProperty
import casper.gui.component.text.UIText
import casper.gui.component.toggle.ToggleStyle
import casper.gui.layout.*
import casper.gui.setProperty
import casper.signal.concrete.StoragePromise
import casper.types.*

class GUIConfig {
	companion object {
		val IMAGE_BUTTON_SIZE = Vector2i(70, 70)
		val TEXT_BUTTON_SIZE = Vector2i(80, 30)
		val UPDATE_INTERVAL = 250L    //	ms
		val LONG_UPDATE_INTERVAL = 2500L    //	ms
		val BORDER = Vector2d(20.0)
		val CONTOUR = Vector2d(5.0)
	}
}

class UIFactory {

	companion object {
		fun createTitleNode(uiScene: UIScene, small:Boolean, onTitle: () -> String): UINode {
			val text = UIText.create(uiScene, onTitle())
			text.alignProperty = TextAlignProperty(Align.CENTER, Align.CENTER)
			UIImage(text.node, ColorFill(WHITE.setAlpha(0.5)))
			text.node.setSize(if (small) 240 else 405, 40)
			UITimer.createRepeated(text.node, GUIConfig.LONG_UPDATE_INTERVAL) { text.text = onTitle() }
			return text.node
		}

		fun createProgressBar(uiScene: UIScene, color: Color3d = WHITE, max: Double = 1.0): UIProgressBar {
			val progress = UIProgressBar(ScrollLogic.create(uiScene, 0.0, 0.0, max), false)
			progress.node.setSize(230, 5)
			progress.node.setProperty(ProgressBarStyle(5.0, ColorFill(Color4d(0.4, 0.4, 0.4, 1.0)), ColorFill(color.setAlpha(1.0))))
			return progress
		}

		fun createDivider(uiScene: UIScene): UINode {
			val node = uiScene.createNode()
			node.layout = OrientationLayout(Orientation.VERTICAL, Align.MIN, Vector2d(GUIConfig.CONTOUR.x, 0.0))
			node += UIImage.create(uiScene, ColorFill(Color4d(0.6, 0.6, 0.6, 1.0))).node.setSize(230, 2)
			return node
		}

	}
}


fun UIText.Companion.createTextContainer(uiScene: UIScene, value: String): UIText {
	return createTextContainer(uiScene.createNode(), value)
}

fun UIText.Companion.createTextContainer(uiNode: UINode, value: String): UIText {
	val text = UIText(uiNode, value)
	uiNode.setProperty(TextFormatProperty(false, 0.0, true))
//	UIPanel(uiNode)
	return text
}

fun UIText.Companion.createTextContainerWithBorder(uiScene: UIScene, value: String, border: Vector2d): UINode {
	return createTextContainerWithBorder(uiScene.createNode(), value, border)
}

fun UIText.Companion.createTextContainerWithBorder(uiNode: UINode, value: String, border: Vector2d): UINode {
	val text = createTextContainer(uiNode, value)
	val node = uiNode.uiScene.createNode()
	UIPanel(node)
	node.layout = BorderLayout(border)
	node += text.node
	return node
}

fun UIScrollBox.Companion.create(target: UINode, content: UINode) {
	val uiScene = target.uiScene

	val scrollBox = create(uiScene)
	scrollBox.content.layout = Layout.BORDER
	scrollBox.content += content

	target.layout = Layout.STRETCH
	target += scrollBox.node
}

fun createStyle(uiScene: UIScene) {
	val pad30x30 = Padding(10, 10, 20, 20)
	val pad62x62 = Padding(4, 4, 59, 59)
	val pad64x64 = Padding(4, 4, 60, 60)
	val pad70x70 = Padding(8, 8, 62, 62)

	val panelFillStyle = Scale9Texture(Texture("style/panel/panel.png"), 0.0, Padding(5, 5, 65, 65))
	val panelStyle = PanelProperty(panelFillStyle)
	uiScene.setProperty(panelStyle)

	val defaultButtonBackStyle = ButtonBackgroundStyle(
			Scale9Texture(Texture("style/button/btnOut.png"), 0.0, pad64x64),
			Scale9Texture(Texture("style/button/btnOver.png"), 0.0, pad64x64),
			Scale9Texture(Texture("style/button/btnPressOut.png"), 0.0, pad64x64),
			Scale9Texture(Texture("style/button/btnPressOver.png"), 0.0, pad64x64),
			Scale9Texture(Texture("style/button/btnDisabled.png"), 0.0, pad64x64))

	val selectedButtonBackStyle = ButtonBackgroundStyle(
			Scale9Texture(Texture("style/button/btnSelectedOut.png"), -3.0, pad70x70),
			Scale9Texture(Texture("style/button/btnSelectedOver.png"), -3.0, pad70x70),
			Scale9Texture(Texture("style/button/btnSelectedPressOut.png"), -3.0, pad70x70),
			Scale9Texture(Texture("style/button/btnSelectedPressOver.png"), -3.0, pad70x70),
			Scale9Texture(Texture("style/button/btnDisabled.png"), -3.0, pad64x64))

	val scrollBackStyle = ButtonBackgroundStyle(
			Scale9Texture(Texture("style/button/btnSmallOut.png"), 0.0, pad62x62),
			Scale9Texture(Texture("style/button/btnSmallOver.png"), 0.0, pad62x62),
			Scale9Texture(Texture("style/button/btnSmallPressOut.png"), 0.0, pad62x62),
			Scale9Texture(Texture("style/button/btnSmallPressOver.png"), 0.0, pad62x62),
			Scale9Texture(Texture("style/button/btnSmallDisabled.png"), 0.0, pad70x70))

	val defaultButtonStyle = ButtonStyle(defaultButtonBackStyle, 4.0)
	uiScene.setProperty(defaultButtonStyle)


	val scrollBoxBorderStyle = ScrollBoxBorderProperty(
			Scale9Texture(Texture("style/box/boxLeft.png"), 0.0, pad30x30),
			Scale9Texture(Texture("style/box/boxRight.png"), 0.0, pad30x30),
			Scale9Texture(Texture("style/box/boxTop.png"), 0.0, pad30x30),
			Scale9Texture(Texture("style/box/boxBottom.png"), 0.0, pad30x30)
	)
	uiScene.setProperty(scrollBoxBorderStyle)

	val textInputStyle = TextInputProperty(Color4d(0.0, 0.0, 0.0, 0.75),
			Scale9Texture(Texture("style/input/normal.png"), 0.0, pad70x70),
			Scale9Texture(Texture("style/input/focused.png"), 0.0, pad70x70))
	uiScene.setProperty(textInputStyle)

	val scrollStyle = ScrollStyle(20.0, 30.0, 10.0, scrollBackStyle, defaultButtonBackStyle)
	uiScene.setProperty(scrollStyle)

	val selectedButtonStyle = ButtonStyle(selectedButtonBackStyle, 2.0)

	val toggleWithLabelProperty = ToggleStyle(selectedButtonStyle, defaultButtonStyle)
	uiScene.setProperty(toggleWithLabelProperty)


	val tabMenuStyle = TabMenuStyle(panelFillStyle, null, contentGap = Vector2d.ZERO)
	uiScene.setProperty(tabMenuStyle)

	uiScene.setProperty(ProgressBarStyle(20.0,
			Scale9Texture(Texture("style/bar/back.png"), 0.0, pad70x70),
			Scale9Texture(Texture("style/bar/progress.png"), 0.0, pad70x70)))
}