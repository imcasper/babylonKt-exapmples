package casper.app.demo

import casper.geometry.Transform
import casper.gui.UIScene
import casper.gui.component.UIComponent
import casper.gui.component.panel.UIPanel
import casper.gui.component.text.UIText
import casper.gui.layout.Layout
import casper.render.Render
import casper.render.model.SceneNode
import casper.util.AssetsStorage

class ModelLoader(uiScene: UIScene, val assets: AssetsStorage, val render: Render, file: String, val transform:Transform) : UIComponent(uiScene.createNode()) {

	init {
		UIPanel(node)
		node.layout = Layout.VERTICAL
		node += UIText.create(uiScene) {
			file
		}.node.setSize(160, 30)

		assets.getSceneFuture(file).thenAccept {
			render.addChild(SceneNode(model = it.model, transform = transform))
		}
	}

}

