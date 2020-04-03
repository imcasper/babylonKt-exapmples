package casper.util

import BABYLON.AbstractMesh
import BABYLON.Scene
import casper.geometry.Vector3d
import casper.geometry.aabb.ContinuousAABBox3d
import casper.geometry.intersection.getPenetrationContinuousBoxWithBox

fun getPenetrationList(scene: Scene, meshFilter: (AbstractMesh) -> Boolean, mainBox: ContinuousAABBox3d): List<Vector3d> {
	val penetrationList = mutableListOf<Vector3d>()

	scene.meshes.forEach {
		if (meshFilter(it)) {
			getPenetrationContinuousBoxWithBox(mainBox, it.getBoundingBox())?.let {
				penetration->
				penetrationList.add(penetration)
			}
		}
	}

	return penetrationList
}

