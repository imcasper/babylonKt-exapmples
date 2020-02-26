/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.*
import BABYLON.GUI.TextBlock
import BABYLON.extension.createScene
import BABYLON.extension.runRenderLoop
import casper.util.TransformManager
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.roundToInt
import kotlin.random.Random

var amount = 0
var created = 0
var destroyed = 0
var time = 0

fun main() {
	val scene = createScene("renderCanvas", true)
	scene.createDefaultCameraOrLight(true, true, true)
	scene.createDefaultEnvironment()

	SceneLoader.LoadAssetContainer("", "sphere.babylon", scene, { assetContainer: AssetContainer ->
		val originalMesh = assetContainer.meshes.firstOrNull()
		if (originalMesh is Mesh) {
			originalMesh.isVisible = false
			originalMesh.isPickable = false
			originalMesh.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
			originalMesh.convertToUnIndexedMesh()
			originalMesh.manualUpdateOfWorldMatrixInstancedBuffer = true

			val manager = TransformManager(originalMesh)


			val random = Random(0)
			var generating = true

			scene.onAfterRenderObservable.add({ _: Scene, _: EventState ->
				destroyed = max(0, amount - manager.size())
				amount = manager.size()
				created = 0

				if (generating) {
					if (manager.size() < 15000) {
						created = 1000
						for (i in 1..created) {
							val transform = manager.create()
							transform.instance.doNotSyncBoundingInfo = true
							transform.instance.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
							transform.instance.isPickable = false
							MeshMover(transform, Vector3((random.nextDouble() - 0.5) * 0.02, (random.nextDouble() - 0.5) * 0.02, (random.nextDouble() - 0.5) * 0.02), 500 + i / 10)
						}
						scene.freezeActiveMeshes(true)
					} else {
						generating = false
					}
				} else {
					if (manager.size() == 0) {
						generating = true
					}
				}
			})
		}

	})

	createTool(scene)
	scene.runRenderLoop()
}

fun createTool(scene: Scene) {

	val text1 = TextBlock();
	text1.text = "";
	text1.color = "white";
	text1.fontSize = 16;
	text1.height = "180px";

	// GUI
	val advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
	advancedTexture.addControl(text1);


	// Instrumentation
	val instrumentation = EngineInstrumentation(scene.getEngine())
	instrumentation.captureGPUFrameTime = true;
	instrumentation.captureShaderCompilationTime = true;

	scene.registerBeforeRender() {
		text1.text = "FPS: " + scene.getEngine().getFps().toPrecision(1) + ""
		text1.text += "\n" + "$amount particles"
		text1.text += "\n" + "$created created in frame"
		text1.text += "\n" + "$destroyed destroyed in frame"
		text1.text += "\n" + "current frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.current * 0.000001).toPrecision(2) + "ms"
		text1.text += "\n" + "average frame time (GPU): " + (instrumentation.gpuFrameTimeCounter.average * 0.000001).toPrecision(2) + "ms"
		text1.text += "\n" + "total shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.total).toPrecision(2) + "ms"
		text1.text += "\n" + "average shader compilation time: " + (instrumentation.shaderCompilationTimeCounter.average).toPrecision(2) + "ms"
		text1.text += "\n" + "compiler shaders count: " + instrumentation.shaderCompilationTimeCounter.count
	}
}

fun Double.toPrecision(precision: Int): String {
	val precisionFactor = 10.pow(precision)
	val normal = this * precisionFactor
	if (normal < Long.MIN_VALUE || normal > Long.MAX_VALUE || !normal.isFinite()) return normal.toString()

	val value = normal.roundToInt()
	val absValue = abs(value)
	val sign = if (value < 0) "-" else ""
	if (precision == 0) {
		return "$sign${absValue / precisionFactor}"
	}
	var remain = (absValue % precisionFactor).toString()
	while (remain.length < precision) {
		remain = "0$remain"
	}
	return "$sign${absValue / precisionFactor}.$remain"
}

fun Int.pow(x: Int): Int = powInt(this, x)

fun powInt(b: Int, e: Int): Int {
//	return b.toDouble().pow(e).roundToInt()
	if (e < 0) {
		return 1 / powInt(b, -e)
	}
	var base = b
	var exp = e
	var result = 1
	while (true) {
		if (exp and 1 == 1) {
			result *= base
		}
		exp = exp shr 1
		if (exp == 0) {
			break
		}
		base *= base
	}

	return result
}
