package casper.util.loader

import BABYLON.Scene
import casper.loader.createImageLoader
import casper.signal.concrete.EitherFuture
import casper.signal.concrete.EitherPromise
import casper.signal.concrete.EitherSignal
import casper.util.atlas.Atlas
import casper.util.atlas.AtlasInfo
import casper.util.atlas.AtlasPage
import org.w3c.dom.Image

fun createAtlas(scene: Scene, info: AtlasInfo): Atlas {
	val pages = mutableMapOf<String, AtlasPage>()
	info.pages.forEach { pageInfo ->
		val image = Image()
		image.src = pageInfo.name
		pages.set(pageInfo.name, AtlasPage(image, pageInfo))
	}
	return Atlas(pages)
}

fun createAtlasLoader(scene: Scene, atlasUrl: String): EitherFuture<Atlas, String> {
	val future = EitherSignal<Atlas, String>()

	loadTextData(atlasUrl).then({
		try {
			val atlasInfo = parseAtlasInfo(it)
			checkImageAndCreateAtlas(future, scene, atlasInfo)
		} catch (error: Throwable) {
			future.reject(error.toString())
		}
	}, {
		future.reject("File loading $atlasUrl is failed: $it")
	})

	return future
}

private fun checkImageAndCreateAtlas(future: EitherPromise<Atlas, String>, scene: Scene, atlasInfo: AtlasInfo) {
	var waiting = atlasInfo.pages.size

	atlasInfo.pages.forEach { page ->
		createImageLoader(page.name).then({
			if (--waiting <= 0) {
				val atlas = createAtlas(scene, atlasInfo)
				var images = atlas.pages.size

				atlas.pages.values.forEach {
					if (!it.image.complete)
						throw Error("Invalid image: $it")
					if (--images <= 0) {
						future.accept(atlas)
					}
				}
			}
		}, {
			future.reject("Image ${page.name} loading for atlas failed: $it")
		})

	}

}