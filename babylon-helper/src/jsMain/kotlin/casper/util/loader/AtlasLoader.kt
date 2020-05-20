package casper.util.loader

import casper.collection.mapping
import casper.loader.createBitmapLoader
import casper.signal.concrete.EitherFuture
import casper.signal.concrete.EitherSignal
import casper.types.Bitmap
import casper.util.atlas.Atlas
import casper.util.atlas.AtlasInfo
import casper.util.atlas.AtlasPage
import casper.util.atlas.AtlasPageInfo

fun createAtlas(name:String, map:Map<AtlasPageInfo, Bitmap>): Atlas {
	val pages = map.entries.mapping {
		val pageInfo = it.key
		val bitmap = map.get(pageInfo)!!
		Pair(pageInfo.name, AtlasPage(bitmap, pageInfo))
	}
	return Atlas(name, pages)
}

fun createAtlasLoader(atlasUrl: String): EitherFuture<Atlas, String> {
	val signal = EitherSignal<Atlas, String>()

	loadTextData(atlasUrl).then({
		try {
			val atlasInfo = parseAtlasInfo(atlasUrl, it)
			createAtlasLoaderFromInfo(atlasInfo).then({
				signal.accept(it)
			}, {
				signal.reject(it)
			})
		} catch (error: Throwable) {
			signal.reject("Internal error: $error")
		}
	}, {
		signal.reject("File loading $atlasUrl is failed: $it")
	})

	return signal
}

private fun createAtlasLoaderFromInfo(atlasInfo: AtlasInfo): EitherFuture<Atlas, String> {
	val signal = EitherSignal<Atlas, String>()

	var loading = atlasInfo.pages.size
	val map = mutableMapOf<AtlasPageInfo, Bitmap>()

	atlasInfo.pages.forEach { page ->
		createBitmapLoader(page.name).then({
			map.set(page, it.data)
			if (--loading == 0) {
				signal.accept(createAtlas(atlasInfo.name, map))
			}
		}, {
			signal.reject("Image ${page.name} loading for atlas failed: $it")
		})
	}
	return signal
}