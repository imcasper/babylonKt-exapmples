package casper.asset

import BABYLON.Scene
import BABYLON.Texture
import casper.loader.createTextureLoader
import casper.loader.createModelLoader
import casper.model.ModelData
import casper.signal.Promise
import casper.util.atlas.Atlas
import casper.util.loader.createAtlasLoader

typealias AssetPromise<Data> = Promise<Data, String>

class AssetManager(val scene: Scene) {
	val models = AssetGroupManager(AssetGroupLoadManager { fileName -> createModelLoader(scene, fileName) })
	val textures = AssetGroupManager(AssetGroupLoadManager { fileName -> createTextureLoader(scene, fileName) })
	val atlases = AssetGroupManager(AssetGroupLoadManager { fileName -> createAtlasLoader(scene, fileName) })

	fun loadModel(fileName: String): AssetPromise<ModelData> {
		return models.loader(fileName)
	}

	fun loadTexture(fileName: String): AssetPromise<Texture> {
		return textures.loader(fileName)
	}

	fun loadAtlas(fileName: String): AssetPromise<Atlas> {
		return atlases.loader(fileName)
	}

	fun getModel(name: String): ModelData? {
		return models.get(name)
	}

	fun getTexture(name: String): Texture? {
		return textures.get(name)
	}

	fun getAtlas(name: String): Atlas? {
		return atlases.get(name)
	}
}