package casper.loader

import BABYLON.AssetsManager
import BABYLON.Scene
import BABYLON.Texture
import BABYLON.TextureAssetTask
import casper.signal.EitherFuture
import casper.signal.EitherSignal

fun createTextureLoader(scene: Scene, file: String): EitherFuture<Texture, String> {
	val loader = EitherSignal<Texture, String>()

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
