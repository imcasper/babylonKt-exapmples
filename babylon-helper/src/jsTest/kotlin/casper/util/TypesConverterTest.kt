package casper.util

import BABYLON.Vector2
import casper.geometry.Vector2d
import kotlin.test.Test
import kotlin.test.assertEquals

class TypesConverterTest {

	@Test
	fun test() {
		assertEquals(Vector2(1.2, 3.4), Vector2d(1.2, 3.4).toVector2())
	}

}