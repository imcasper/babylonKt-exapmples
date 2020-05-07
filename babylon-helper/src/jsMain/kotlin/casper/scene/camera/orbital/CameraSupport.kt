package casper.scene.camera.orbital

import casper.geometry.Vector2i
import casper.input.InputDispatcher
import casper.scene.core.PenetrationDetector
import casper.signal.concrete.Future

data class CameraSupport(val nextFrameFuture: Future<Double>, val onViewportSize: () -> Vector2i, val inputDispatcher: InputDispatcher, val penetrationDetector: PenetrationDetector? = null)