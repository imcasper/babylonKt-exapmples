package casper.loader

import BABYLON.AssetsManager
import BABYLON.Scene
import BABYLON.Texture
import BABYLON.TextureAssetTask
import casper.signal.SinglePromiseSignal

fun createTextureLoader(scene: Scene, file: String): SinglePromiseSignal<Texture, String> {
	val loader = SinglePromiseSignal<Texture, String>()

	val manager = AssetsManager(scene)
	manager.addTextureTask(file, file)
	manager.onTaskSuccess = {
		it as TextureAssetTask
		loader.accept(it.texture)
	}
	manager.onTaskError = {
		it as TextureAssetTask
		loader.reject("")
	}
	manager.load()

	return loader
}
