package casper.util

import BABYLON.InstancedMesh
import BABYLON.Mesh
import casper.collection.addIndexed
import casper.collection.removeIndexed

class TransformManager(private val original: Mesh) {
	private val items = mutableListOf<TransformController>()
	private val reserve = mutableListOf<InstancedMesh>()

	fun size(): Int {
		return items.size
	}

	private fun pushMesh(value:InstancedMesh) {
		value.isVisible = false
		reserve.add(value)
	}
	private fun popMesh():InstancedMesh {
		if (reserve.isEmpty()) {
			val instance= original.createInstance("")
		//	instance.isVisible = true
			instance.isPickable = false
			return instance
		} else {
			val instance=  reserve.removeAt(reserve.size - 1)
		//	instance.isVisible = false
			return instance
		}
	}

	fun create(): Transform {
//		val instance = popMesh()
		val instance= original.createInstance("")
		val item = TransformController(this, original, instance)
		if (items.addIndexed(item)) {
			return item
		}
		throw Error("Can't add item $item")
	}

	fun destroy(item: Transform): Boolean {
		item as TransformController
		if (items.removeIndexed(item)) {
			item.instance.dispose()
			return true
		} else {
			return false
		}
	}
}