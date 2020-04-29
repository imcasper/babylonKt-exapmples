package casper.model

import BABYLON.Geometry
import casper.util.atlas.Atlas

class AtlasHelper {
	companion object {

		/**
		 * 	Замена текстуры модели на другую текстуру
		 * 	Опционально можно изменять текстурные координаты
		 *
		 *  	Изменение тексутрных координат затронут геометрию (UV-tex-coord),
		 * 	которая может использоваться с другими текстурами и материалами
		 *
		 *  @param sourceTextureName - source texture name (or null for any)
		 * @param uvConverter - изменение текстурных координат
		 *
		 */
		fun replace(data: ModelData, sourceTextureName: String?, atlas: Atlas, imageName: String): Boolean {
			val (page, converter) = UVReplacer.create(atlas, imageName)

			val mapOfChanges = TextureReplacer.replace(data, sourceTextureName, page.info.name)
			val geometries = mutableSetOf<Geometry>()
			data.meshes.forEach { mesh ->
				mesh.material?.let { material ->
					mapOfChanges.get(material)?.forEach { texture ->
						mesh.geometry?.let { geometry ->
							if (geometries.add(geometry)) {
								UVReplacer.convertUV(geometry, texture.coordinatesIndex, converter)
							}
						}
					}
				}
			}
			return true
		}
	}
}