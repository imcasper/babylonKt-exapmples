package casper.util

import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.Vector4d
import casper.render.vertex.Vertex

/**
 * 	Коллекция вершин
 * 	Удобно и быстро добавлять вершины
 * 	(фасад для VertexData)
 */
class VertexBuffer {
	var boxMax = Vector3d(Double.MIN_VALUE)
	var boxMin = Vector3d(Double.MAX_VALUE)

	private var positions = FloatArray(0)
	private var normals = FloatArray(0)
	private var colors = FloatArray(0)
	private var uvs = FloatArray(0)
	private var uvs2 = FloatArray(0)
	private var uvs3 = FloatArray(0)
	private var uvs4 = FloatArray(0)

	private var dirty = false
	private var used = 0
	private var capacity = 0

	init {
		resize(16)
	}

	fun clear() {
		boxMax = Vector3d(Double.MIN_VALUE)
		boxMin = Vector3d(Double.MAX_VALUE)

		dirty = true
		used = 0
	}

	private fun resize(maxVertexAmount: Int) {
		if (maxVertexAmount < capacity) throw Exception("Cant make smaller")
		if (maxVertexAmount == capacity) return

		capacity = maxVertexAmount

		positions = positions.copyOf(maxVertexAmount * 3)
		uvs = uvs.copyOf(maxVertexAmount * 2)
		uvs2 = uvs2.copyOf(maxVertexAmount * 2)
		uvs3 = uvs3.copyOf(maxVertexAmount * 2)
		uvs4 = uvs4.copyOf(maxVertexAmount * 2)
		colors = colors.copyOf(maxVertexAmount * 4)
		normals = normals.copyOf(maxVertexAmount * 3)
	}

	fun translate(offset: Vector3d) {
		for (v in 0..positions.size / 3) {
			positions[v * 3 + 0] += offset.x.toFloat()
			positions[v * 3 + 1] += offset.y.toFloat()
			positions[v * 3 + 2] += offset.z.toFloat()
		}
	}

	fun getVertexAmount(): Int {
		return used
	}

	fun getTriangleAmount(): Int {
		return used / 3
	}

	fun getVertex(vertexId: Int): Vector3d {
//		if (indexId >= getIndexAmount()) throw Exception("Absent index: " + indexId)
//		val vertexId = indices[indexId]
		if (vertexId >= getVertexAmount()) throw Exception("Invalid vertex index: " + vertexId)
		val position = Vector3d(positions[vertexId * 3 + 0].toDouble(), positions[vertexId * 3 + 1].toDouble(), positions[vertexId * 3 + 2].toDouble())
		return position
	}

	fun addVertex(value: Vertex) {
		if (used == capacity) {
			resize(capacity * 2)
		}
		setVertex(used++, value.position, value.normal, value.color, value.uv, value.uv2, value.uv3, value.uv4)
	}

	private fun setVertex(vertexId: Int, position: Vector3d, normal: Vector3d?, color: Vector4d?, uv: Vector2d?, uv2: Vector2d?, uv3: Vector2d?, uv4: Vector2d?) {
		if (vertexId >= getVertexAmount()) throw Exception("Invalid vertex index: " + vertexId)

		boxMax = boxMax.upper(position)
		boxMin = boxMin.lower(position)

		positions[vertexId * 3 + 0] = position.x.toFloat()
		positions[vertexId * 3 + 1] = position.y.toFloat()
		positions[vertexId * 3 + 2] = position.z.toFloat()

		if (normal != null) {
			normals[vertexId * 3 + 0] = normal.x.toFloat()
			normals[vertexId * 3 + 1] = normal.y.toFloat()
			normals[vertexId * 3 + 2] = normal.z.toFloat()
		}

		if (color != null) {
			colors[vertexId * 4 + 0] = color.x.toFloat()
			colors[vertexId * 4 + 1] = color.y.toFloat()
			colors[vertexId * 4 + 2] = color.z.toFloat()
			colors[vertexId * 4 + 3] = color.w.toFloat()
		}

		if (uv != null) {
			uvs[vertexId * 2 + 0] = uv.x.toFloat()
			uvs[vertexId * 2 + 1] = uv.y.toFloat()
		}

		if (uv2 != null) {
			uvs2[vertexId * 2 + 0] = uv2.x.toFloat()
			uvs2[vertexId * 2 + 1] = uv2.y.toFloat()
		}

		if (uv3 != null) {
			uvs3[vertexId * 2 + 0] = uv3.x.toFloat()
			uvs3[vertexId * 2 + 1] = uv3.y.toFloat()
		}

		if (uv4 != null) {
			uvs4[vertexId * 2 + 0] = uv4.x.toFloat()
			uvs4[vertexId * 2 + 1] = uv4.y.toFloat()
		}

		dirty = true
	}

	fun addLine(v0: Vector3d, v1: Vector3d, color: Vector4d) {
		addVertex(Vertex(position = v0, color = color))
		addVertex(Vertex(position = v1, color = color))
	}
}