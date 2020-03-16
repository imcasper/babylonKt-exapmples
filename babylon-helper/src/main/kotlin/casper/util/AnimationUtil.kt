package casper.util

import BABYLON.Animatable
import BABYLON.Node

private fun createAnimation(source:Node, loop: Boolean = true, speedRatio: Double = 1.0) {
	source.getAnimationRanges().forEach { animationRange ->
		if (animationRange != null) {
			source.beginAnimation(animationRange.name, loop, speedRatio)
			return@forEach
		}
	}
}
/**
 *	Запускаем первую анимацию (рекурсивно)
 */
fun Node.playAnimation(loop: Boolean = true, speedRatio: Double = 1.0) {
	createAnimation(this, loop, speedRatio)
	forChildren {
		it.playAnimation(loop, speedRatio)
	}
}

private fun Node.forEachAnimatable(recursive: Boolean = true, operation: (Animatable) -> Unit) {
	getScene().getAllAnimatablesByTarget(this).forEach(operation)
	if (recursive) {
		forChildren {
			it.forEachAnimatable(recursive, operation)
		}
	}
}

/**
 *	Сбрасываем анимацию (рекурсивно)
 */
fun Node.stopAnimation() {
	forEachAnimatable {
		it.goToFrame(0.0)
		it.stop()
	}
}

/**
 *	Останавливаем первую анимацию (рекурсивно)
 */
fun Node.pauseAnimation() {
	forEachAnimatable {
		it.pause()
	}
}
/**
 *	Останавливаем первую анимацию (рекурсивно)
 */
fun Node.resumeAnimation() {
	forEachAnimatable {
		it.restart()
	}
}

/**
 *	Выбираем нужный кадр в анимации (рекурсивно)
 */
fun Node.setAnimationFrame(frame: Double) {
	createAnimation(this, true, 1.0)
	forChildren {
		createAnimation(it, true, 1.0)
	}
	forEachAnimatable {
		it.goToFrame(frame)
		it.pause()
	}
}
