package casper.asset

import casper.collection.observableMapOf

class AssetGroupManager<Data>(val loadManager: AssetGroupLoadManager<Data>) {
	val values = observableMapOf<String, Data>()

	init {
		loadManager.map.thenAdd { loaderEntry ->
			val name = loaderEntry.key
			val loader = loaderEntry.value
			loader.thenAccept { data ->
				values.put(name, data)
			}
		}
	}

	fun loader(fileName: String):AssetPromise<Data> {
		return loadManager.get(fileName)
	}

	fun get(fileName: String): Data? {
		return values.get(fileName)
	}

	fun set(fileName: String, value: Data) {
		values.put(fileName, value)
	}

	fun remove(fileName: String) {
		values.remove(fileName)
	}
}