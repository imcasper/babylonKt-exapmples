package casper.app

import BABYLON.*
import casper.asset.Assets
import casper.model.Model
import casper.model.ModelCreateOptions

class RobotDemo(val scene: Scene, val shadow:Shadow, val assets:Assets) {
	val steelMaterial = PBRMaterial("", scene)

	init {
		steelMaterial.albedoTexture = Texture("atlas/unknown.png", scene)
		steelMaterial.albedoTexture?.coordinatesIndex = 0

		steelMaterial.metallicTexture = Texture("atlas/steel_metallic.png", scene)
		steelMaterial.metallicTexture?.coordinatesIndex = 0

//		steelMaterial.bumpTexture = Texture("atlas/normal_hill.png", scene)
//		steelMaterial.bumpTexture?.coordinatesIndex = 0

		steelMaterial.useRoughnessFromMetallicTextureAlpha = true

		createRobot()
	}

	private fun createRobot() {
		val oilMaterial = PBRMaterial("oil-material", scene)
		oilMaterial.alpha = 0.6

//		val cubeModel = Model(assets.cube, null)
//		cubeModel.node.position = Vector3(2.0, 0.0, 0.0)
//		cubeModel.addToScene()
//
//		assets.cube.assetContainer.meshes.forEach {
//			if (it is Mesh) {
//				it.material = oilMaterial
//			}
//		}

		val sphere = MeshBuilder.CreateSphere("test", SphereOptions())
//		sphere.isVisible =false
		scene.removeMesh(sphere)


		val sphere2 = sphere.createInstance("")
		sphere2.position = Vector3(2.5, 0.0, 0.0)
		sphere2.sourceMesh.material = oilMaterial
		sphere2.sourceMesh.receiveShadows = true

		(scene.lights.first().getShadowGenerator() as ShadowGenerator).addShadowCaster(sphere)
		(scene.lights.first().getShadowGenerator() as ShadowGenerator).addShadowCaster(sphere2)

		assets.robot_builder.assetContainer.meshes.forEach {
			if (it is Mesh) {
				it.material = oilMaterial
			}
		}

		val model2 = Model(assets.robot_builder)
		model2.node.position = Vector3(2.0, 0.0, 0.0)
		model2.addToScene()



	}
}