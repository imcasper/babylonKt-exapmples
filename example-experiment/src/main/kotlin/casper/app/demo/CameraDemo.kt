package casper.app.demo

import BABYLON.*
import BABYLON.Debug.AxesViewer
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d
import casper.geometry.polygon.direction
import casper.geometry.polygon.length
import casper.gui.UIScene
import casper.math.EPSILON
import casper.scene.camera.PlainCamera
import casper.scene.camera.PlainCameraInputSettings
import casper.types.GRAY
import casper.types.PURPLE
import casper.util.TextArea
import casper.util.toRay
import casper.util.toVector3
import casper.util.toVector3d
import kotlin.math.PI
import kotlin.math.pow
import kotlin.math.roundToInt
import kotlin.random.Random

class CameraDemo(val scene: Scene, val uiScene: UIScene) {
	val mainCamera: Camera
	val plainCamera: PlainCamera

	val cameraCenterHelper = createHelper(Color3.White())
	val cameraPivotHelper = createHelper(Color3.Yellow())

	val textArea = TextArea(scene, null)

	init {
		cameraCenterHelper.rotateAround(Vector3.Zero(), Vector3(1.0, 0.0, 0.0), -PI / 2.0)
		createHelper(Color3.White())

		mainCamera = ArcRotateCamera("test", 0.0, 0.0, 10.0, Vector3.Zero(), scene)
		mainCamera.position = Vector3(10.0, 20.0, 10.0)
		mainCamera.upVector = Vector3(0.0, 0.0, 1.0)
		mainCamera.attachControl(scene.getEngine().getRenderingCanvas()!!)

		plainCamera = PlainCamera(scene, uiScene.sceneDispatcher, PlainCameraInputSettings(), ::onTranslationPivot, ::getPenetrationDepth)
		plainCamera.camera.transform = Transform.fromYAxis(Vector3d(32.0), Vector3d(1.0, 1.0, -1.0), Vector3d.Z)

		scene.activeCamera = mainCamera
		switchCamera()

		uiScene.sceneDispatcher.onKeyDown.then {
			if (it.button.code == 32) {
				switchCamera()
			}
		}

		val land = MeshBuilder.CreateBox("BOX", BoxOptions(width = 128.0, height = 128.0, depth = 1.0), scene)
		land.position = Vector3(64.0, 64.0, 0.5)

		val randomSource = Random(0)
		val linRandom = {
			randomSource.nextDouble()
		}
		val sqrRandom = {
			randomSource.nextDouble().pow(2)
		}

		for (i in 1..50) {
			val w = (sqrRandom() * 16.0 + 4.0).roundToInt().toDouble()
			val h = (sqrRandom() * 16.0 + 4.0).roundToInt().toDouble()
			val d = (sqrRandom() * 16.0 + 4.0).roundToInt().toDouble()

			val x = (linRandom() * 128.0).roundToInt().toDouble()
			val y = (linRandom() * 128.0).roundToInt().toDouble()

			val r = linRandom() * 0.7 + 0.3
			val g = linRandom() * 0.7 + 0.3
			val b = linRandom() * 0.7 + 0.3

			val box = MeshBuilder.CreateBox("BOX", BoxOptions(width = w, height = h, depth = d), scene)
			box.position = Vector3(x, y, d * 0.5)

			val material = StandardMaterial("", scene)
			material.diffuseColor = Color3(r, g, b)
			box.material = material
		}

		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			updateHelper()
			updateInfo()
		})
	}

	private fun updateInfo() {
		val camera = plainCamera.camera

		var value = ""
		value += "position: " + camera.transform.position.toPrecision(4) + "\n"
		value += "forward: " + Transform.getLocalY(camera.transform.orientation).toPrecision(4) + "\n"
		value += "up: " + Transform.getLocalZ(camera.transform.orientation).toPrecision(4) + "\n"

		textArea.setText(value)
	}


	private fun getPenetrationDepth(line: Line3d): Vector3d? {
		val info = scene.pickWithRay(line.toRay(), {
			it.name == "BOX"
		})
		val point = info?.pickedPoint
		if (point != null && point.length().isFinite()) {
			val destToPoint = (line.v1 - point.toVector3d()).length()
			val length =   line.length()
			if (destToPoint <= length) {
				val pp = point.toVector3d() - line.direction() * 0.01
				println(pp.toPrecision(2))
				return pp
			}
		}
		val p1 = getPenetrationWithFloor(line, 10.0)
		if (p1 != null) {
			println(p1.toPrecision(2))
			return p1 + Vector3d.Z *  0.01
		}

		val p2 = getPenetrationWithFloor(Line3d(Vector3d(line.v0.x, line.v0.y, -line.v0.z), Vector3d(line.v1.x, line.v1.y, -line.v1.z)), -300.0)
		if (p2 != null) {
			println(p2.toPrecision(2))
			return Vector3d(p2.x, p2.y, -p2.z) - Vector3d.Z *  0.01
		}
		return null
	}

	private fun getPenetrationWithFloor(line: Line3d, floor: Double): Vector3d? {
		val z0 = line.v0.z - floor
		val z1 = line.v1.z - floor

		if (z0 < 0.0 || z1 < 0.0) {
			if (z0 < 0.0) {
				//	Начало погружено
				return line.v0
			} else {
				//	Конец погружен
				val f = z1 / (z1 - z0)
				if (f < 0.0 || f > 1.0) {
					throw Error("Invalid depth: $f")
				}
				return line.v0 * f + line.v1 * (1.0 - f)
			}
		}
		return null
	}


	private fun updateHelper() {
		cameraPivotHelper.position = plainCamera.plainController.pivot.toVector3()

		if (scene.activeCamera == mainCamera) {
			cameraCenterHelper.parent = plainCamera.nativeCamera
		} else if (scene.activeCamera == plainCamera.nativeCamera) {
			cameraCenterHelper.parent = mainCamera
		}
	}

	private fun switchCamera() {
		if (scene.activeCamera == mainCamera) {
			scene.activeCamera = plainCamera.nativeCamera
			scene.clearColor = Color4.FromColor3(PURPLE, 1.0)
			println("now test camera")
		} else {
			scene.activeCamera = mainCamera
			scene.clearColor = Color4.FromColor3(GRAY, 1.0)
			println("now def camera")
		}
	}

	private fun onTranslationPivot(line: Line3d): Vector3d? {
		val ray = line.toRay()
		val info = scene.pickWithRay(ray)
		val picked = info?.pickedPoint?.toVector3d()
		if (picked != null || info?.pickedMesh?.name == "BOX") {
			return picked
		} else {
			val plane = Plane(0.0, 0.0, 1.0, 0.0)
			val intersect = ray.intersectsPlane(plane)
			if (intersect != null) {
				return ray.origin.toVector3d() + ray.direction.toVector3d() * intersect
			}
		}
		return null
	}

	private fun createHelper(color: Color3): Mesh {

		val pivot = AxesViewer(scene)

		val sphere = MeshBuilder.CreateSphere("", SphereOptions(diameter = 0.2), scene)
		sphere.isPickable = false
		sphere.isBlocker = false
		pivot.xAxis.parent = sphere
		pivot.yAxis.parent = sphere
		pivot.zAxis.parent = sphere

		val material = StandardMaterial("", scene)
		material.diffuseColor = color
		sphere.material = material
		return sphere
	}

}