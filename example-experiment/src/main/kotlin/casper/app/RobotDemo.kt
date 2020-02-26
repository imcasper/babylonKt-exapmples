package casper.app

import BABYLON.Color3
import BABYLON.PBRMaterial
import BABYLON.Scene
import BABYLON.Texture
import casper.asset.Assets
import casper.model.MaterialReplacer
import casper.model.ModelData
import casper.model.createAndPlaceInstance

class RobotDemo(val scene: Scene, val assets:Assets) {
	val steelMaterial = PBRMaterial("", scene)

	init {
		steelMaterial.albedoTexture = Texture("atlas/unknown.png", scene)
		steelMaterial.albedoTexture?.coordinatesIndex = 0

		steelMaterial.metallicTexture = Texture("atlas/steel_metallic.png", scene)
		steelMaterial.metallicTexture?.coordinatesIndex = 0

//		steelMaterial.bumpTexture = Texture("atlas/normal_hill.png", scene)
//		steelMaterial.bumpTexture?.coordinatesIndex = 0

		steelMaterial.useRoughnessFromMetallicTextureAlpha = true
	}
	private fun createRobotData(original: ModelData): ModelData {
		val modelData = original.clone("")
		//	create extended UV map
//		modelData.assetContainer.geometries.forEach {
//			UVReplacer.cloneUV(it, VertexBuffer.UVKind, VertexBuffer.UV2Kind)
//			UVReplacer.cloneUV(it, VertexBuffer.UVKind, VertexBuffer.UV3Kind)
//		}

		//	replace Red by steel material
		MaterialReplacer.replace(modelData) {
			steelMaterial
//			if (it.name == "Red") steelMaterial else null
		}

//		val atlas = manager.getAtlas("atlas.atlas")!!
//		AtlasHelper.replace(modelData, "atlas/unknown.png", atlas, "unknown")
//		AtlasHelper.replace(modelData, "atlas/steel_metallic.png", atlas, "steel_metallic")
//		AtlasHelper.replace(modelData, "atlas/normal_hill.png", atlas, "normal_hill")
		return modelData
	}

	private fun createRobot() {
		//	materials

		val soilMaterial = PBRMaterial("", scene)
		soilMaterial.albedoTexture = Texture("atlas/soil.png", scene)
		soilMaterial.metallic = 0.0
		soilMaterial.roughness = 0.9

		val oilMaterial = PBRMaterial("", scene)
		oilMaterial.albedoColor = Color3(0.02, 0.01, 0.03)
		oilMaterial.metallicTexture = Texture("atlas/oil.png", scene)
		oilMaterial.roughness = 0.4
		oilMaterial.alpha = 0.9

		val robot_truck = createRobotData(assets.robot_truck)

		val model = robot_truck.createAndPlaceInstance()


//		val cargoModified = assets.robot_cargo.clone("")
//		MaterialReplacer.replace(cargoModified) {
//			if (it.name == "Red") oilMaterial else null
//		}
//		val cargo = cargoModified.createAndPlaceInstance()
//		cargo.position = Vector3(0.0, 0.0, 0.0)
//		cargo.setAnimationFrame(80.0)


		//	TextureReplacer.replace(robotTruckModified, "atlas/steel.png", atlas, "steel")
	}
}