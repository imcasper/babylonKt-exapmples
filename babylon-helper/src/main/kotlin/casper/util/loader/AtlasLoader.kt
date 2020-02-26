package casper.util.loader

import BABYLON.Scene
import BABYLON.Texture
import casper.signal.Promise
import casper.signal.SinglePromiseSignal
import casper.util.atlas.Atlas
import casper.util.atlas.AtlasInfo
import casper.util.atlas.AtlasPage

fun createAtlas(scene: Scene, info: AtlasInfo): Atlas {
	val pages = mutableMapOf<String, AtlasPage>()
	info.pages.forEach { pageInfo ->
		val texture = Texture(pageInfo.name, scene, false, true, Texture.TRILINEAR_SAMPLINGMODE)
		pages.set(pageInfo.name, AtlasPage(texture, pageInfo))
	}
	return Atlas(pages)
}

fun createAtlasLoader(scene: Scene, atlasUrl: String): Promise<Atlas, String> {
	val future = SinglePromiseSignal<Atlas, String>()

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

private fun checkImageAndCreateAtlas(future: SinglePromiseSignal<Atlas, String>, scene: Scene, atlasInfo: AtlasInfo) {
	var waiting = atlasInfo.pages.size

	atlasInfo.pages.forEach { page ->
		loadImage(page.name).then({
			if (--waiting <= 0) {
				val atlas = createAtlas(scene, atlasInfo)
				future.accept(atlas)
			}
		}, {
			future.reject("Image ${page.name} loading for atlas failed: $it")
		})

	}

}