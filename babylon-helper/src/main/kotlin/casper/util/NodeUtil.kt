package casper.util

import BABYLON.AbstractMesh
import BABYLON.Animatable
import BABYLON.Node

fun Node.forChildren(action: (Node) -> Unit) {
	getChildMeshes { true }.forEach { action(it) }
}


fun Node.addMeshToScene() {
	if (this is AbstractMesh) {
		getScene().addMesh(this)
	}
	forChildren { it.addMeshToScene() }
}

fun Node.removeMeshFromScene() {
	if (this is AbstractMesh) {
		getScene().removeMesh(this)
	}
	forChildren { it.removeMeshFromScene() }
}