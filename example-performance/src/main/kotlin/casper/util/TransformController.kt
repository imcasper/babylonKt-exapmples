package casper.util

import BABYLON.*
import casper.collection.Indexed
import kotlin.Error


class TransformController(var manager: TransformManager, val original: Mesh, override val instance: InstancedMesh) : Transform, Indexed {
	override var index: Int = -1

	private val matrix = Matrix()

	override val position = Vector3()
	override val scaling = Vector3(1.0, 1.0,1.0)
	override val rotation = Quaternion()

	override fun update(): Boolean {
		val matrixBuffer = original.worldMatrixInstancedBuffer
		if (matrixBuffer != null) {
			val index = index
			if (index >= 0 && index * 16 < matrixBuffer.length) {
				Matrix.ComposeToRef(scaling, rotation, position, matrix)
				matrixBuffer.set(matrix.m, index * 16)
				return true
			}
		}
		return false
	}

	override fun dispose() {
		manager.destroy(this)
	}
}
