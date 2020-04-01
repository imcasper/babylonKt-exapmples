package casper.util

import BABYLON.EngineInstrumentation
import BABYLON.EventState
import BABYLON.GUI.Container
import BABYLON.Scene
import casper.format.toPrecision

class FPS(val scene: Scene, customRoot: Container? = null) {
	val instrumentation = EngineInstrumentation(scene.getEngine())
	private var textBlock = TextArea(scene, customRoot)

	init {
		// Instrumentation
		instrumentation.captureGPUFrameTime = true;
		instrumentation.captureShaderCompilationTime = true;

		var accumulateTime = 0.0

		scene.onAfterRenderObservable.add({ _: Scene, _: EventState ->
			accumulateTime += scene.getEngine().getDeltaTime()
			if (accumulateTime > 100.0) {
				accumulateTime -= 100.0
				update()
			}
		})
	}

	fun update() {
		var indices = 0
		scene.meshes.forEach {
			indices += it.getTotalIndices().toInt()
		}
		var value = "FPS: " + scene.getEngine().getFps().toPrecision(1) + ""
		value += "\n" + "triangles: " + (indices / 3)
		value += "\n" + "meshes: " + scene.meshes.size
		value += "\n" + "current frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.current * 0.000001).toPrecision(2) + "ms"
		value += "\n" + "average frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.average * 0.000001).toPrecision(2) + "ms"
		value += "\n" + "total shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.total).toPrecision(2) + "ms"
		value += "\n" + "average shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.average).toPrecision(2) + "ms"
		value += "\n" + "compiler shaders count: " + instrumentation.shaderCompilationTimeCounter.count

		textBlock.setText(value)
	}
}
