package casper.asset

import casper.collection.observableMapOf

class TypedAssetCollection<Asset>(val loadManager: TypedAssetLoaderCollection<Asset>) {
	val values = observableMapOf<String, Asset>()

	init {
		loadManager.map.thenAdd { loaderEntry ->
			val name = loaderEntry.key
			val loader = loaderEntry.value
			loader.thenAccept { data ->
				values.put(name, data)
			}
		}
	}

	fun loader(fileName: String): AssetFuture<Asset> {
		return loadManager.get(fileName)
	}

	fun get(key: String): Asset? {
		return values[key]
	}

	fun getOrPut(key: String, creator: () -> Asset): Asset {
		return values.getOrPut(key) { creator() }
	}

	fun set(key: String, value: Asset) {
		values.put(key, value)
	}

	fun remove(key: String) {
		values.remove(key)
	}
}