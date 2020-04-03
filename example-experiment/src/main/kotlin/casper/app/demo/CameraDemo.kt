package casper.app.demo

import BABYLON.*
import casper.format.toPrecision
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.geometry.aabb.AABBox3d
import casper.geometry.aabb.ContinuousAABBox3d
import casper.geometry.polygon.Line3d
import casper.gui.UIScene
import casper.scene.camera.orbital.OrbitalCameraInputSettings
import casper.scene.camera.orbital.OrbitalCameraSettings
import casper.scene.camera.orbital.SimpleOrbitalCamera
import casper.util.TextArea
import casper.util.getPenetrationList
import casper.util.toRay
import casper.util.toVector3d
import kotlin.math.PI
import kotlin.math.pow
import kotlin.math.roundToInt
import kotlin.random.Random

class CameraDemo(val scene: Scene, val uiScene: UIScene) {
	val orbitalCamera: SimpleOrbitalCamera

	val cameraCenterHelper = createHelper(scene, Color3.White())
	val cameraPivotHelper = createHelper(scene, Color3.Yellow())

	val textArea = TextArea(scene, null)

	init {
		createLight(scene)

		cameraCenterHelper.rotateAround(Vector3.Zero(), Vector3(1.0, 0.0, 0.0), -PI / 2.0)
		createHelper(scene, Color3.White())

		orbitalCamera = SimpleOrbitalCamera(scene, uiScene.sceneDispatcher, OrbitalCameraInputSettings(
				OrbitalCameraSettings(0.05 * PI, 0.45 * PI, 20.0, 300.0, AABBox3d(Vector3d.ZERO, Vector3d(128.0, 128.0, 0.0)))), ::getPenetrationResolver)
		orbitalCamera.orbitalController.setPivot(Vector3d(64.0, 64.0, 0.0))
		scene.activeCamera = orbitalCamera.nativeCamera

		generateLand()

		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			updateInfo()
		})
	}

	private fun updateInfo() {
		val orbitalController = orbitalCamera.orbitalController
		val camera = orbitalCamera.camera

		var value = ""
		value += "orbital:\n"
		value += "range: " + orbitalController.getPosition().range.toPrecision(1) + "\n"
		value += "vertical-angle: " + orbitalController.getPosition().verticalAngle.toPrecision(2) + "\n"
		value += "horizontal-angle: " + orbitalController.getPosition().horizontalAngle.toPrecision(2) + "\n"
		value += "pivot: " + orbitalController.getPivot().toPrecision(3) + "\n"
		value += "\n"
		value += "position: " + camera.transform.position.toPrecision(3) + "\n"
		value += "forward: " + Transform.getLocalY(camera.transform.orientation).toPrecision(3) + "\n"
		value += "up: " + Transform.getLocalZ(camera.transform.orientation).toPrecision(3) + "\n"

		textArea.setText(value)
	}

	private fun getPenetrationResolver(position: Vector3d): Vector3d? {
		val cameraRange = 1.5
		val cameraBox = AABBox3d.byRadius(position, Vector3d(cameraRange))

		val penetrationSummary = mutableListOf<Vector3d>()
		val penetrationWithMeshes = getPenetrationList(scene, { it.name.contains("BOX") }, cameraBox)

		penetrationSummary.addAll(penetrationWithMeshes)
		getPenetrationWithFloor(position, 0.0 + cameraRange)?.let {
			penetrationSummary.add(it)
		}
		getPenetrationWithRoof(position, 300.0 - cameraRange)?.let {
			penetrationSummary.add(it)
		}

		if (penetrationSummary.isEmpty()) {
			return null
		}

		var penetrationMiddle = Vector3d.ZERO
		penetrationSummary.forEach {
			penetrationMiddle += it// / penetrationSummary.size.toDouble()
		}
		println("Collision amount: ${penetrationSummary.size}; middle: ${penetrationMiddle.toPrecision(4)}")

		return penetrationMiddle
	}

	private fun getContinuousPenetrationResolver(translation: Line3d): Vector3d? {
		val cameraRange = 1.5

		val continuousBox = ContinuousAABBox3d(translation, cameraRange)

		val penetrationSummary = mutableListOf<Vector3d>()

		val penetrationWithMeshes = getPenetrationList(scene, { it.name.contains("BOX") }, continuousBox)

		penetrationSummary.addAll(penetrationWithMeshes)
		getPenetrationWithFloor(translation, 0.0 + cameraRange)?.let {
			penetrationSummary.add(it)
		}
		getPenetrationWithRoof(translation, 300.0 - cameraRange)?.let {
			penetrationSummary.add(it)
		}

		if (penetrationSummary.isEmpty()) {
			return null
		}

		var penetrationMiddle = Vector3d.ZERO
		penetrationSummary.forEach {
			penetrationMiddle += it// / penetrationSummary.size.toDouble()
		}
		println("Collision amount: ${penetrationSummary.size}; middle: ${penetrationMiddle.toPrecision(4)}")

		return penetrationMiddle
	}

	private fun getPenetrationWithFloor(position: Vector3d, floor: Double): Vector3d? {
		val depth = position.z - floor
		if (depth > 0.0) return null
		return Vector3d(0.0, 0.0, depth)
	}

	private fun getPenetrationWithRoof(position: Vector3d, roof: Double): Vector3d? {
		val depth = position.z - roof
		if (depth < 0.0) return null
		return Vector3d(0.0, 0.0, depth)
	}


	private fun getPenetrationWithFloor(line: Line3d, floor: Double): Vector3d? {
		val depth = line.v1.z - floor
		if (depth > 0.0) return null
		return Vector3d(0.0, 0.0, depth)
	}

	private fun getPenetrationWithRoof(line: Line3d, roof: Double): Vector3d? {
		val depth = line.v1.z - roof
		if (depth < 0.0) return null
		return Vector3d(0.0, 0.0, depth)
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


	private fun generateLand() {
		val land = MeshBuilder.CreateBox("BOX", BoxOptions(width = 128.0, height = 128.0, depth = 2.0), scene)
		land.position = Vector3(64.0, 64.0, 0.0)

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
			val d = (sqrRandom() * 8.0 + 4.0).roundToInt().toDouble()

			val x = (linRandom() * 128.0).roundToInt().toDouble()
			val y = (linRandom() * 128.0).roundToInt().toDouble()

			val r = linRandom() * 0.7 + 0.3
			val g = linRandom() * 0.7 + 0.3
			val b = linRandom() * 0.7 + 0.3

			val box = MeshBuilder.CreateBox("BOX$i", BoxOptions(width = w, height = h, depth = d), scene)
			box.position = Vector3(x, y, d * 0.5)

			val material = StandardMaterial("", scene)
			material.diffuseColor = Color3(r, g, b)
			box.material = material
		}
	}

}