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
import kotlin.math.abs
import kotlin.math.roundToInt
import kotlin.random.Random

class MeshMover(val index: Int, val node: TransformNode, var position: Vector3, var velocity: Vector3) {
	init {
		node.getScene().onBeforeRenderObservable.add({ scene: Scene, eventState: EventState ->
			position = Vector3(position.x + velocity.x, position.y + velocity.y, position.z + velocity.z)

			node.position = position
			node.scaling = Vector3(0.01, 0.01, 0.01)

			if (position.x > 1.0) {
				velocity.x = -abs(velocity.x)
			}
			if (position.x < -1.0) {
				velocity.x = abs(velocity.x)
			}

			if (position.y > 1.0) {
				velocity.y = -abs(velocity.y)
			}
			if (position.y < -1.0) {
				velocity.y = abs(velocity.y)
			}

			if (position.z > 1.0) {
				velocity.z = -abs(velocity.z)
			}
			if (position.z < -1.0) {
				velocity.z = abs(velocity.z)
			}
		})
	}
}

fun main() {
	val scene = createScene("renderCanvas", true)
	scene.createDefaultCameraOrLight(true, true, true)
	scene.createDefaultEnvironment()

	val random = Random(0)


	val onSuccess = { assetContainer: AssetContainer ->
		for (originalMesh in assetContainer.meshes) {
			if (originalMesh is Mesh) {
				originalMesh.isPickable = false
				originalMesh.doNotSyncBoundingInfo = true
				originalMesh.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
				originalMesh.convertToUnIndexedMesh()
			}
		}

		for (index in 0 until 5000) {
			for (originalMesh in assetContainer.meshes) {
				if (originalMesh is Mesh) {
					val newInstance = originalMesh.createInstance("i")

					newInstance.isPickable = false
					newInstance.doNotSyncBoundingInfo = true
					newInstance.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
					MeshMover(index, newInstance, newInstance.position, Vector3((random.nextDouble() - 0.5) * 0.01, (random.nextDouble() - 0.5) * 0.01, (random.nextDouble() - 0.5) * 0.01))
				}
			}
		}
		Unit
	}

	SceneLoader.LoadAssetContainer("", "sphere.babylon", scene, onSuccess)

	createTool(scene)
	scene.runRenderLoop()
}

fun createTool(scene: Scene) {

	var text1 = TextBlock();
	text1.text = "";
	text1.color = "white";
	text1.fontSize = 16;
	text1.height = "150px";

	// GUI
	var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
	advancedTexture.addControl(text1);


	// Instrumentation
	var instrumentation = EngineInstrumentation(scene.getEngine())
	instrumentation.captureGPUFrameTime = true;
	instrumentation.captureShaderCompilationTime = true;

	scene.registerBeforeRender() {
		text1.text = "FPS: " + scene.getEngine().getFps().toPrecision(1) + ""
		text1.text += "\n" + "5M triangles"
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
