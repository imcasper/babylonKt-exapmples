package casper.asset

import casper.collection.observableMapOf

class AssetGroupLoadManager<Data>(val createAssetLoader: (fileName: String) -> AssetPromise<Data>) {
	val map = observableMapOf<String, AssetPromise<Data>>()

	fun isLoading(): Boolean {
		map.values.forEach {
			if (!it.isCompleted()) return true
		}
		return false
	}

	fun get(fileUrl: String, reload: Boolean = false): AssetPromise<Data> {
		var loader = map.get(fileUrl)
		if (loader == null || reload) {
			loader = createAssetLoader(fileUrl)
			map.put(fileUrl, loader)
		}
		return loader
	}
}