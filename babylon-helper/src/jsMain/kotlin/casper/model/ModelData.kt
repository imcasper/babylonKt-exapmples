package casper.model

import BABYLON.*
import casper.util.copyMeshState

class ModelData(
		val name: String,
		val scene: Scene,
		val meshes: List<Mesh>,
		val textures: List<BaseTexture>,
		val materials: List<Material>,
		val geometries: List<GeometryInfo>,
		val lights: List<Light>,
		val cameras: List<Camera>,
		val instances: List<InstancedMesh>
)