package casper.util

import BABYLON.AbstractMesh
import BABYLON.InstancedMesh
import BABYLON.Node

fun Node.forChildren(action: (Node) -> Unit) {
	getChildMeshes { true }.forEach { action(it) }
}


fun Node.addMeshToScene() {
	if (this is AbstractMesh) {
		getScene().addMesh(this)
	}
	if (this is InstancedMesh) {
		sourceMesh._resyncLightSources()
	}
	forChildren { it.addMeshToScene() }
}

fun Node.removeMeshFromScene() {
	if (this is AbstractMesh) {
		getScene().removeMesh(this)
	}
	forChildren { it.removeMeshFromScene() }
}

/**
 *	Запускаем первую анимацию (рекурсивно)
 */
fun Node.playAnimation(loop: Boolean, speedRatio: Double = 1.0) {
	getAnimationRanges().forEach { animationRange ->
		if (animationRange != null) {
			beginAnimation(animationRange.name, loop, speedRatio)
			return@forEach
		}
	}
	forChildren {
		it.playAnimation(loop, speedRatio)
	}
}

/**
 *	Останавливаем первую анимацию (рекурсивно)
 */
fun Node.stopAnimation() {
	getAnimationRanges().forEach { animationRange ->
		if (animationRange != null) {
			val animatable = beginAnimation(animationRange.name, true, 1.0)
			animatable?.stop()
			return@forEach
		}
	}

	forChildren {
		it.stopAnimation()
	}
}

/**
 *	Выбираем нужный кадр в анимации (рекурсивно)
 */
fun Node.setAnimationFrame(frame: Double) {
	getAnimationRanges().forEach { animationRange ->
		if (animationRange != null) {
			val animatable = beginAnimation(animationRange.name, true, 1.0)
			animatable?.goToFrame(frame)
			animatable?.pause()
			return@forEach
		}
	}

	forChildren {
		it.setAnimationFrame(frame)
	}
}
