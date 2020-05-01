package casper.asset

import BABYLON.Scene
import BABYLON.Texture
import casper.loader.createImageLoader
import casper.loader.createTextureLoader
import casper.loader.createModelLoader
import casper.model.ModelData
import casper.signal.concrete.EitherFuture
import casper.util.atlas.Atlas
import casper.util.loader.createAtlasLoader
import org.w3c.dom.Image

typealias AssetFuture<Data> = EitherFuture<Data, String>

class AssetManager(val scene: Scene) {
	val models = AssetGroupManager(AssetGroupLoadManager { fileName -> createModelLoader(scene, fileName) })
	val images = AssetGroupManager(AssetGroupLoadManager { fileName -> createImageLoader(fileName) })
	val textures = AssetGroupManager(AssetGroupLoadManager { fileName -> createTextureLoader(scene, fileName) })
	val atlases = AssetGroupManager(AssetGroupLoadManager { fileName -> createAtlasLoader(fileName) })

	fun loadModel(fileName: String): AssetFuture<ModelData> {
		return models.loader(fileName)
	}

	fun loadTexture(fileName: String): AssetFuture<Texture> {
		return textures.loader(fileName)
	}

	fun loadAtlas(fileName: String): AssetFuture<Atlas> {
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

	fun getImage(name: String): Image? {
		return images.get(name)
	}
}