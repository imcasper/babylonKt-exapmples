/**
 * An example similar to the sample from the site:
 *		Fast Build a World
 *		https://www.babylonjs-playground.com/#MJNICE
 */
package casper.app

import BABYLON.*
import BABYLON.Debug.AxesViewer
import BABYLON.extension.createScene
import BABYLON.extension.runRenderLoop
import casper.asset.AssetManager
import casper.asset.Assets
import casper.asset.createAssetsArrayLoader
import casper.model.*
import casper.util.FPS
import casper.util.addMeshToScene
import casper.util.forChildren
import casper.util.playAnimation

fun main() {
	val scene = createScene("renderCanvas", true)
	scene.useRightHandedSystem = true
	scene.createDefaultCamera(true, true, true)
	scene.activeCamera?.position = Vector3(5.0, 5.0, 5.0)
	SceneLoader.ShowLoadingScreen = false


	val manager = AssetManager(scene)
	manager.atlases.loader("atlas.atlas").thenAccept {
		createAssetsArrayLoader(manager).then({
			Demo(scene, manager, it)
		}, {
			scene.clearColor = Color4(1.0, 0.0, 0.0)
			println(it)
		})
	}
	scene.runRenderLoop()
}

class Demo(val scene: Scene, val manager: AssetManager, val assets: Assets) {


	init {
		scene.debugLayer.show()

		createSkyBox()


//		FPS(scene)
//		createMine()
//		RobotDemo(scene, assets)
		ShadowDemo(scene, assets)
//		createMat()
	}



	fun createMat() {
		ModelFactory.create(assets.materials).addMeshToScene()


		AxesViewer(scene)

//	val sceneData = manager.models.get("scene.babylon")!!
//	ModelFactory.create(sceneData, ModelCreateOptions(true, false)).addMeshToScene()
	}

	fun createMine() {
		assets.robot_builder.assetContainer.materials.forEach {
			val companyColor = Color3(0.0, 0.1, 0.7)
			val companyColor2 = Color3(0.0, 0.1, 0.7)
			if (it.name == "Red" && it is PBRMaterial) {
				it.albedoColor = companyColor
			}
			if (it.name == "Green" && it is PBRMaterial) {
				it.albedoColor = companyColor2
			}
		}
		val modelData2 = MeshMerger.merge(assets.robot_builder, assets.robot_builder.name) ?: return

		val positionList = mutableListOf<Vector3>()
		val R = 6
		for (x in -R..R) {
			for (y in -R..R) {
				for (z in -R..R) {
					positionList.add(Vector3(x.toDouble(), y.toDouble(), z.toDouble()))
				}
			}
		}
//		ModelFactory.createAndPlace(modelData2)

		val models = mutableListOf<TransformNode>()

		scene.onAfterRenderObservable.add({ _: Scene, _: EventState ->
			models.forEach { model ->
				model.position.x += 0.05
				model.position = model.position
//
//				model.forChildren {
//					if (it is AbstractMesh) {
//						it.position = it.position
//						it.computeWorldMatrix(true)
//					}
//				}
//				model.computeWorldMatrix(true)
			}
			for (iteration in 1..7) {
				if (positionList.isEmpty()) return@add

				val position = positionList.removeAt(0)

				val model = ModelFactory.createAndPlace(modelData2)
				model.forChildren {
					if (it is AbstractMesh) {
						it.isPickable = false
						it.cullingStrategy = AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY
					}
				}
				model.position = position
				model.scaling = Vector3(0.5, 0.5, 0.5)
				model.playAnimation(true)
				models.add(model)

//				model.freezeWorldMatrix()
//				model.computeWorldMatrix()
			}

//			scene.freezeActiveMeshes(true)
		})

		println("${assets.robot_builder.instances.size}=>${modelData2.instances.size}")
	}

	fun createSkyBox() {
//		val environmentTexture = CubeTexture("skybox.dds", scene, prefiltered = false, createPolynomials = false)
//		scene.environmentTexture = environmentTexture
//		scene.createDefaultSkybox(environmentTexture)

		// Light
		val light = DirectionalLight("light", Vector3(-1.0, -1.0, -0.5).normalize(), scene);
		light.intensity = 5.0
	}
}
