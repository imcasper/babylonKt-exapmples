package casper.util

import BABYLON.EngineInstrumentation
import BABYLON.EventState
import BABYLON.GUI.Container
import BABYLON.GUI.Control
import BABYLON.GUI.TextBlock
import BABYLON.Number
import BABYLON.Scene
import casper.format.toPrecision

class FPS(val scene: Scene, customRoot: Container? = null) {
	val instrumentation = EngineInstrumentation(scene.getEngine())
	val output = TextBlock()

	init {
		output.text = "";
		output.color = "white";
		output.fontSize = 16;
		output.height = "180px";
		output.horizontalAlignment = Control._HORIZONTAL_ALIGNMENT_LEFT as Number
		output.verticalAlignment = Control._VERTICAL_ALIGNMENT_BOTTOM  as Number

		// GUI
		if (customRoot == null) {
			val advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
			advancedTexture.addControl(output);
		} else {
			customRoot.addControl(output)
		}


		// Instrumentation
		instrumentation.captureGPUFrameTime = true;
		instrumentation.captureShaderCompilationTime = true;

		var accumulateTime = 0.0

		scene.onAfterRenderObservable.add({ _: Scene, _: EventState ->
			accumulateTime += scene.getEngine().getDeltaTime()
			if (accumulateTime > 1.25) {
				accumulateTime -= 1.25
				update()
			}
		})
	}

	fun update() {
		var indices = 0
		scene.meshes.forEach {
			indices += it.getTotalIndices().toInt()
		}

		output.text = "FPS: " + scene.getEngine().getFps().toPrecision(1) + ""
		output.text += "\n" + "triangles: " + (indices / 3)
		output.text += "\n" + "meshes: " + scene.meshes.size
		output.text += "\n" + "current frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.current * 0.000001).toPrecision(2) + "ms"
		output.text += "\n" + "average frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.average * 0.000001).toPrecision(2) + "ms"
		output.text += "\n" + "total shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.total).toPrecision(2) + "ms"
		output.text += "\n" + "average shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.average).toPrecision(2) + "ms"
		output.text += "\n" + "compiler shaders count: " + instrumentation.shaderCompilationTimeCounter.count
	}
}
