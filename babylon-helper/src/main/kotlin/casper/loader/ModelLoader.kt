package casper.loader

import BABYLON.Scene
import BABYLON.SceneLoader
import casper.model.ModelData
import casper.model.ModelFactory
import casper.signal.EitherFuture
import casper.signal.EitherSignal

fun createModelLoader(scene: Scene, fileUrl: String): EitherFuture<ModelData, String> {
	val loader = EitherSignal<ModelData, String>()
	SceneLoader.LoadAssetContainer(fileUrl, "", scene, {
		val modelData = ModelFactory.createModelData(scene, fileUrl, it)
		loader.accept(modelData)
	}, {

	}, { _: Scene, message: String, _: Any? ->
		loader.reject(message)
	})
	return loader
}
