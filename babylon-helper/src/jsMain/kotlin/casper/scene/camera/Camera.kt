package casper.scene.camera

import BABYLON.Camera
import casper.scene.core.TransformHolder

interface Camera : TransformHolder {
	val source: Camera

	fun isActive(): Boolean
}