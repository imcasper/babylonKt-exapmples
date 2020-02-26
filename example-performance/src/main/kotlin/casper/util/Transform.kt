package casper.util

import BABYLON.InstancedMesh
import BABYLON.Quaternion
import BABYLON.Vector3

interface Transform {
	val instance: InstancedMesh
	val position: Vector3
	val scaling: Vector3
	val rotation: Quaternion
	fun update(): Boolean
	fun dispose()
}