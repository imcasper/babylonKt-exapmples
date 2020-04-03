package casper.app.demo

import BABYLON.*
import BABYLON.Debug.AxesViewer


fun createHelper(scene: Scene, color: Color3 = Color3.White()): Mesh {

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

fun createLight(scene:Scene) {
	if (scene.lights.isNotEmpty()) {
		scene.lights[0].intensity *= 0.5
	}

	val skyLight = HemisphericLight("", Vector3(0.0, 0.0, 1.0), scene)
	skyLight.diffuse = Color3(0.3, 0.3, 0.3)
	skyLight.specular = Color3(0.0, 0.0, 0.0)
	skyLight.groundColor = Color3(0.3, 0.3, 0.3)
}