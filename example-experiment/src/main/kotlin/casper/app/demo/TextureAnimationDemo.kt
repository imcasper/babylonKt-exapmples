package casper.app.demo

import casper.collection.map.MapUtil
import casper.geometry.Matrix4d
import casper.geometry.Transform
import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.polygon.Octagon
import casper.geometry.polygon.Octagon3d
import casper.gui.UIScene
import casper.gui.component.UIComponent
import casper.gui.component.panel.UIPanel
import casper.gui.component.scroll.UIScroll
import casper.gui.component.text.UIText
import casper.gui.component.toggle.UIToggleWithLabel
import casper.gui.layout.Layout
import casper.loader.BitmapReference
import casper.render.Render
import casper.render.extension.TextureUVAnimator
import casper.render.extension.VerticesBuilder
import casper.render.material.*
import casper.render.model.SceneModel
import casper.render.model.SceneNode
import casper.render.vertex.Vertex
import casper.types.Bitmap

class TextureAnimationDemo(uiScene: UIScene, val render: Render, templateBitmap: BitmapReference) : UIComponent(uiScene.createNode()) {

	val list = VerticesBuilder().add(
			Octagon(
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), uvMetallic = Vector2d(0.0, 0.0), position = Vector3d(0.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), uvMetallic = Vector2d(0.0, 1.0), position = Vector3d(0.0, 2.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), uvMetallic = Vector2d(1.0, 0.0), position = Vector3d(2.0, 0.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(1.0, 1.0), uvMetallic = Vector2d(1.0, 1.0), position = Vector3d(2.0, 2.0, 0.0)),
					Vertex(uvAlbedo = Vector2d(0.0, 0.0), uvMetallic = Vector2d(0.0, 0.0), position = Vector3d(0.0, 0.0, 0.2)),
					Vertex(uvAlbedo = Vector2d(0.0, 1.0), uvMetallic = Vector2d(0.0, 1.0), position = Vector3d(0.0, 2.0, 0.2)),
					Vertex(uvAlbedo = Vector2d(1.0, 0.0), uvMetallic = Vector2d(1.0, 0.0), position = Vector3d(2.0, 0.0, 0.2)),
					Vertex(uvAlbedo = Vector2d(1.0, 1.0), uvMetallic = Vector2d(1.0, 1.0), position = Vector3d(2.0, 2.0, 0.2))
			))
	val albedoAnimated = TextureReference(templateBitmap.data, templateBitmap.name, TextureTransform(matrix = Matrix4d.IDENTITY))
	val specialAnimated = TextureReference(templateBitmap.data, templateBitmap.name, TextureTransform(matrix = Matrix4d.IDENTITY))

	val specialChannel = FloatMapReference(MapUtil.takeChannel(specialAnimated.data, 0), null, specialAnimated.transform)

	val material = Material(albedo = albedoAnimated, roughness = FloatConstantReference(0.95), metallic = specialChannel)

	var speed = Vector3d.X
	var animator = TextureUVAnimator(render, specialChannel.transform, speed)
	val sceneNode = SceneNode(model = SceneModel(list, material), transform = Transform(position = Vector3d(-8.0, 0.0, 0.0)))

	val textNode = UIText.create(uiScene, "")
	val dxScroll = UIScroll.create(uiScene, false, 1.0, -2.0, 2.0) {
		speed = speed.copy(x = it)
		animator.dispose()
		animator = TextureUVAnimator(render, specialChannel.transform, speed)
	}
	val dyScroll = UIScroll.create(uiScene, false, 0.0, -2.0, 2.0) {
		speed = speed.copy(y = it)
		animator.dispose()
		animator = TextureUVAnimator(render, specialChannel.transform, speed)
	}

	init {
		UIPanel(node)
		node.layout = Layout.VERTICAL
		node += textNode.node.setSize(400, 60)
		node += UIText.create(uiScene, { "speed: ${speed.toPrecision(1)}" }).node.setSize(240, 20)
		node += dxScroll.node.setSize(480, 20)
		node += dyScroll.node.setSize(480, 20)
		node += UIToggleWithLabel.create(uiScene, UIText.create(uiScene, "show"), true, {
			if (it) {
				render.addChild(sceneNode)
			} else {
				render.removeChild(sceneNode)
			}
		}).node

	}
}
