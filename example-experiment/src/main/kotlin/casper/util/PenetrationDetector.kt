package casper.util

import BABYLON.AbstractMesh
import BABYLON.Scene
import casper.geometry.Capsule3d
import casper.geometry.Vector3d
import casper.geometry.basis.Box3d
import casper.geometry.intersection.getPenetrationBoxWithBox
import casper.geometry.intersection.getPenetrationContinuousBoxWithBox

fun getPenetrationList(scene: Scene, meshFilter: (AbstractMesh) -> Boolean, mainBox: Capsule3d): List<Vector3d> {
	val penetrationList = mutableListOf<Vector3d>()

	scene.meshes.forEach {
		if (meshFilter(it)) {
			getPenetrationContinuousBoxWithBox(mainBox, it.getBoundingBox())?.let { penetration ->
				penetrationList.add(penetration)
			}
		}
	}

	return penetrationList
}

fun getPenetrationList(scene: Scene, meshFilter: (AbstractMesh) -> Boolean, mainBox: Box3d): List<Vector3d> {
	val penetrationList = mutableListOf<Vector3d>()

	scene.meshes.forEach {
		if (meshFilter(it)) {
			getPenetrationBoxWithBox(mainBox, it.getBoundingBox())?.let { penetration ->
				penetrationList.add(penetration)
			}
		}
	}

	return penetrationList
}

