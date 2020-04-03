package casper.scene.core

import casper.geometry.Vector3d
import casper.geometry.polygon.Line3d


/**
 * 	Детектор проникновения "исходного тела"  в другие "тела"
 * 	Задается перемещение "исходного тела"
 * 	Возващается вектор проникновения "исходного тело" в другие тела в момент завершения перемещения
 */
typealias ContinuousPenetrationDetector = (Line3d) -> Vector3d?

/**
 * 	Детектор проникновения "исходного тела"  в другие "тела"
 * 	Задается положение "исходного тела"
 * 	Возващается вектор проникновения "исходного тело" в другие тела в момент завершения перемещения
 */
typealias PenetrationDetector = (Vector3d) -> Vector3d?