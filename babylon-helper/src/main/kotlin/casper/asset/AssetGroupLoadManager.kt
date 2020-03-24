package casper.asset

import casper.collection.observableMapOf

class AssetGroupLoadManager<Data>(val createAssetLoader: (fileName: String) -> AssetFuture<Data>) {
	val map = observableMapOf<String, AssetFuture<Data>>()

	fun isLoading(): Boolean {
		map.values.forEach {
			if (!it.complete) return true
		}
		return false
	}

	fun get(fileUrl: String, reload: Boolean = false): AssetFuture<Data> {
		var loader = map.get(fileUrl)
		if (loader == null || reload) {
			loader = createAssetLoader(fileUrl)
			map.put(fileUrl, loader)
		}
		return loader
	}
}