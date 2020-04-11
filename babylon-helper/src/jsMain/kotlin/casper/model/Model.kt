package casper.model

import BABYLON.InstancedMesh
import BABYLON.Node
import BABYLON.TransformNode
import BABYLON.Vector3
import casper.core.Disposable
import casper.util.addMeshToScene
import casper.util.removeMeshFromScene
import kotlin.random.Random

class Model(data: ModelData, parent:TransformNode?=null, options: ModelCreateOptions? = null) :Disposable {
	private var onScene = false
	private var _isDisposed = false
	private val parts = mutableListOf<Node>()

	var options: ModelCreateOptions = options ?: ModelCreateOptions()
		set(value) {
			if (field == value || _isDisposed) return
			field = value
			updateContent()
		}

	var data: ModelData = data
		set(value) {
			if (field == value || _isDisposed) return
			field = value
			updateContent()
		}

	val node = TransformNode("", null)

	init {
		updateContent()

		if (parent != null) {
			node.parent = parent
			addToScene()
		}
	}

	override fun dispose() {
		clear()
		node.dispose()
		_isDisposed = true
	}

	fun isDisposed():Boolean {
		return _isDisposed
	}

	fun addToScene() {
		if (onScene || _isDisposed) return

		onScene = true
		node.addMeshToScene()
		addShadow()
	}

	fun removeFromScene() {
		if (!onScene || _isDisposed) return

		onScene = false
		node.removeMeshFromScene()
		removeShadow()
	}

	private fun addShadow() {
		if (options.castShadow) {
			ShadowHelper.addCaster(node)
		}
		if (options.receiveShadow) {
			ShadowHelper.addReceiver(node)
		}
	}

	private fun removeShadow() {
		ShadowHelper.removeReceiver(node)
		ShadowHelper.removeCaster(node)
	}

	private fun updateContent() {
		clear()

		node.name = data.name
		setInstances(ModelFactory.createInstances(data, options))

		if (onScene) {
			node.addMeshToScene()
			addShadow()
		}
	}

	private fun clear() {
		parts.forEach {
			it.dispose()
		}
		parts.clear()
	}

	private fun setInstances(instances:List<InstancedMesh>) {
		parts.addAll(instances)

		if (!options.ignoresLights) {
			data.assetContainer.lights.forEach {
				//	light automatically added in clone
				val light = it.clone(it.name)
				if (light != null) {
					parts.add(light)
				}
			}
		}
		if (!options.ignoreCameras) {
			data.assetContainer.cameras.forEach {
				//	todo: camera automatically added in clone?
				val camera = it.clone(it.name)
				parts.add(camera)
			}
		}
		parts.forEach {
			it.parent = node
		}
	}

}