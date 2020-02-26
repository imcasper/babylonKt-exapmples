package casper.util

import BABYLON.AbstractMesh

fun copyMeshState(source: AbstractMesh, target: AbstractMesh) {
	target.position = source.position
	target.rotation = source.rotation
	target.scaling = source.scaling
	target.rotationQuaternion = source.rotationQuaternion

//	target.animations = source.animations
//	for (range in source.getAnimationRanges()) {
//		if (range != null) {
//			target.createAnimationRange(range.name, range.from, range.to)
//		}
//	}
	target.setPivotMatrix(source.getPivotMatrix())
}