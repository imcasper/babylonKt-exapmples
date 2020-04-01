package casper.app.demo

import BABYLON.*
import BABYLON.Debug.AxesViewer
import casper.geometry.Transform
import casper.geometry.Vector3d
import casper.gui.UIScene
import casper.scene.camera.PlainCameraInput
import casper.scene.camera.PlainCameraInputSettings
import casper.scene.camera.createPlainCamera
import casper.types.GRAY
import casper.types.PURPLE
import casper.util.toVector3
import casper.util.toVector3d
import kotlin.math.PI
import kotlin.random.Random

class CameraDemo(val scene: Scene, val uiScene: UIScene) {
	val mainCamera: Camera
	val camera: FreeCamera
	val cameraInput: PlainCameraInput

	val cameraCenterHelper = createHelper(Color3.White())
	val cameraPivotHelper = createHelper(Color3.Yellow())

	init {
		cameraCenterHelper.rotateAround(Vector3.Zero(), Vector3(1.0, 0.0, 0.0), -PI / 2.0)
		createHelper(Color3.White())

		mainCamera = ArcRotateCamera("test", 0.0, 0.0, 10.0, Vector3.Zero(), scene)
		mainCamera.position = Vector3(10.0, 20.0, 10.0)
		mainCamera.upVector = Vector3(0.0, 0.0, 1.0)
		mainCamera.attachControl(scene.getEngine().getRenderingCanvas()!!)

		camera = FreeCamera("test", Vector3(0.0, 0.0, 0.0), scene)
		cameraInput = createPlainCamera(scene, uiScene.sceneDispatcher, camera, PlainCameraInputSettings(), ::onTranslationPivot, ::onRotationPivot, ::getCollision)

		cameraInput.camera.transform = Transform.fromYAxis(Vector3d(32.0), Vector3d(1.0, 1.0, -1.0), Vector3d.Z)

		scene.activeCamera = mainCamera
		switchCamera()

		uiScene.sceneDispatcher.onKeyDown.then {
			if (it.button.code == 32) {
				switchCamera()
			}
		}

		val land = MeshBuilder.CreateBox("BOX", BoxOptions(width = 128.0, height = 128.0, depth = 1.0), scene)
		land.position = Vector3(64.0, 64.0, 0.5)

		val random = Random(0)
		for (i in 1..100) {
			val w = random.nextDouble() * 3.0 + 3.0
			val h = random.nextDouble() * 3.0 + 3.0
			val d = random.nextDouble() * 6.0 + 1.0

			val x = random.nextDouble() * 128.0
			val y = random.nextDouble() * 128.0

			val r = random.nextDouble() * 0.7 + 0.3
			val g = random.nextDouble() * 0.7 + 0.3
			val b = random.nextDouble() * 0.7 + 0.3

			val box = MeshBuilder.CreateBox("BOX", BoxOptions(width = w, height = h, depth = d), scene)
			box.position = Vector3(x, y, d * 0.5)

			val material = StandardMaterial("", scene)
			material.diffuseColor = Color3(r, g, b)
			box.material = material
		}

		scene.onBeforeRenderObservable.add({ _: Scene, _: EventState ->
			updateHelper()
		})
	}


	private fun getCollision(pos: Vector3d): Vector3d? {
		if (pos.z < 10.0 || pos.z > 300.0) {
			return Vector3d.Z
		}
		return null
	}


	private fun updateHelper() {
		val info = cameraInput.getRotationPivot() ?: cameraInput.getTranslationPivot()
		if (info == null) {
			cameraPivotHelper.position = Vector3(Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY, Double.POSITIVE_INFINITY)
		} else {
			cameraPivotHelper.position = info.toVector3()
		}

		if (scene.activeCamera == mainCamera) {
			cameraCenterHelper.parent = camera
		} else if (scene.activeCamera == camera) {
			cameraCenterHelper.parent = mainCamera
		}
	}

	private fun switchCamera() {
		if (scene.activeCamera == mainCamera) {
			scene.activeCamera = camera
			scene.clearColor = Color4.FromColor3(PURPLE, 1.0)
			println("now test camera")
		} else {
			scene.activeCamera = mainCamera
			scene.clearColor = Color4.FromColor3(GRAY, 1.0)
			println("now def camera")
		}
	}

	private fun onTranslationPivot(ray: Ray): Vector3d? {
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

	private fun onRotationPivot(ray: Ray): Vector3d? {
		val info = scene.pickWithRay(ray)
		val picked = info?.pickedPoint?.toVector3d()
		if (picked != null || info?.pickedMesh?.name == "BOX") {
			return picked
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