package casper.app

import BABYLON.*
import BABYLON.Debug.AxesViewer
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

		steelMaterial.useRoughnessFromMetallicTextureAlpha = true

		createRobot()
	}

	private fun createRobot() {
		val model2 = Model(assets.robot_builder)
		model2.node.position = Vector3(2.0, 0.0, 0.0)
		model2.addToScene()

		MeshBuilder.CreateBox("test", BoxOptions(width = 2.0, height = 2.0, depth = 0.1))

		AxesViewer(scene, 10.0)
	}
}