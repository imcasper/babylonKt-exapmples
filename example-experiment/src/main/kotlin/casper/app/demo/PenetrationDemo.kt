package casper.app.demo

import BABYLON.*
import casper.geometry.aabb.AABBox3d
import casper.geometry.intersection.getPenetrationBoxWithBox
import casper.gui.UIScene
import casper.util.TextArea
import casper.util.toVector3d
import kotlin.math.PI

class PenetrationDemo(val scene: Scene, val uiScene: UIScene) {
	val textArea = TextArea(scene, null)

	init {
		createLight(scene)
		val camera = ArcRotateCamera("", PI / 4.0, PI / 4.0, 20.0, Vector3.Zero(), scene)
		val canvas = scene.getEngine().getRenderingCanvas()!!
		camera.attachControl(canvas)

		val helper1 = createHelper(scene, Color3.White())
		helper1.scalingDeterminant = 0.4

		val helper2 = createHelper(scene, Color3.White())
		helper2.scalingDeterminant = 0.2

		scene.activeCamera = camera
		camera.upVector = Vector3(0.0, 0.0, 1.0)

		val ground = MeshBuilder.CreateBox("GROUND", BoxOptions(width = 16.0, height = 16.0, depth = 1.0), scene)
		ground.position = Vector3(0.0, 0.0, -0.5)

		val boxMesh1 = MeshBuilder.CreateBox("BOX1", BoxOptions(width = 3.0, height = 2.0, depth = 1.0), scene)
		boxMesh1.position = Vector3(3.0, 2.0, 1.0)

		val boxMesh2 = MeshBuilder.CreateBox("BOX2", BoxOptions(width = 3.0, height = 4.0, depth = 5.0), scene)
		boxMesh2.position = Vector3(0.0, 0.0, 4.0)

		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			val box1 = AABBox3d(boxMesh1.getBoundingInfo().boundingBox.minimumWorld.toVector3d(), boxMesh1.getBoundingInfo().boundingBox.maximumWorld.toVector3d())
			val box2 = AABBox3d(boxMesh2.getBoundingInfo().boundingBox.minimumWorld.toVector3d(), boxMesh2.getBoundingInfo().boundingBox.maximumWorld.toVector3d())

			val penetration = getPenetrationBoxWithBox(box1, box2)

			var info = "" +
					"Q => Z+\n" +
					"E => Z-\n" +
					"W => Y+\n" +
					"S => Y-\n" +
					"A => X+\n" +
					"D => X-\n"

			if (penetration == null) {
//				helper1.position = Vector3.Zero()
//				helper2.position = Vector3.Zero()
				info += "NO penetration"
			} else {
//				helper1.position = penetration.v0.toVector3()
//				helper2.position = penetration.v1.toVector3()
				info += "${penetration.toPrecision(2)} (${penetration.length()})"
			}
			textArea.setText(info)
		})

		uiScene.sceneDispatcher.onKeyDown.then {
			val delta = 0.2
			if (it.button.code == 81) {
				boxMesh2.position.z += delta
			}
			if (it.button.code == 69) {
				boxMesh2.position.z -= delta
			}
			if (it.button.code == 68) {
				boxMesh2.position.x += delta
			}
			if (it.button.code == 65) {
				boxMesh2.position.x -= delta
			}
			if (it.button.code == 87) {
				boxMesh2.position.y += delta
			}
			if (it.button.code == 83) {
				boxMesh2.position.y -= delta
			}
		}
	}

}