package casper.app

import casper.geometry.Transform
import casper.render.material.Material
import casper.render.material.MaterialReference
import casper.render.model.Mesh
import casper.render.model.Model
import casper.render.model.ModelTransform
import casper.render.model.TimeLine
import casper.render.vertex.Vertex
import casper.render.vertex.VerticesReference

data class MergeKey(val material: Material, val timeLine: TimeLine) {
	var materialName: String? = null
	var verticesName: String? = null
}

data class MergeInfo(val key: MergeKey, val mesh: Mesh, val transform: Transform, val name: String?)

object ModelSimplifier {
	fun execute(model: Model): Model {
		val children = mergeModelTransform(model.children)
		return model.copy(children = children.toSet())
	}

	private fun mergeModelTransform(values: Collection<ModelTransform>): List<ModelTransform> {
		val materialMap = mutableMapOf<MergeKey, MutableList<MergeInfo>>()
		values.forEach {
			val subMesh = it.model.mesh
			if (subMesh != null) {
				val key = MergeKey(subMesh.material.data, it.timeLine)
				key.materialName = subMesh.material.name
				key.verticesName = subMesh.vertices.name

				val subMeshList = materialMap.getOrPut(key) {
					mutableListOf()
				}
				subMeshList += MergeInfo(key, subMesh, it.transform, it.model.name)
			}
		}

		return materialMap.map {
			val key = it.key
			val list = it.value
			val vertices = mergeVertices(list)
			val name = list.firstOrNull()?.name ?: ""
			val mesh = Mesh(VerticesReference(vertices, it.key.verticesName), MaterialReference(it.key.material, it.key.materialName), name)
			ModelTransform(model = Model(mesh = mesh), timeLine = key.timeLine)
		}
	}

	private fun mergeVertices(values: MutableList<MergeInfo>): List<Vertex> {
		val vertices = mutableListOf<Vertex>()

		values.forEach {
			val transform = it.transform
			val mesh = it.mesh
			mesh.vertices.data.forEach {
				val normal = it.normal

				vertices.add(it.copy(
						position = transform.transform(it.position),
						normal = if (normal != null) transform.rotation(normal) else null
				))
			}
		}

		return vertices
	}

}