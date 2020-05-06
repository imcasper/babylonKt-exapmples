package casper.demo

import casper.geometry.Vector2d
import casper.geometry.Vector3d
import casper.geometry.basis.Box3d
import casper.geometry.polygon.Line3d
import casper.geometry.polygon.intersectionLineWithAABBox
import casper.types.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

class BoxDemo {

	fun run() {
		val canvas = document.getElementById("renderCanvas")
		if (!(canvas is HTMLCanvasElement)) {
			throw Error("Cant find canvas with id renderCanvas")
		}

		val context = canvas.getContext("2d")
		if (context !is CanvasRenderingContext2D) return

		val drawer = CanvasDrawer(context)
		val supplier = LineSupplier(canvas, drawer)

		var hasException = false

		window.setInterval({
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			canvas.clear()

			if (hasException) {
				drawer.drawRect(Vector2d.ZERO, Vector2d(10.0, 10.0), RED.setAlpha(1.0))
				hasException = false
			}

			val line = supplier.getLine()
			val start3 = Vector3d(line.v0.x, line.v1.y, 0.0)
			val finish3 = Vector3d(line.v0.x, line.v1.y, 0.0)
			val box = Box3d.byDimension(Vector3d(2.0, 1.0, -4.0), Vector3d(4.0, 3.0, 5.0))

			drawer.drawRect(Vector2d(2.0, 1.0), Vector2d(4.0, 3.0), GRAY.setAlpha(0.5))

			drawer.drawLine(line.v0, line.v1, BLUE.setAlpha(1.0))

			drawer.drawGrid(BLACK.setAlpha(1.0))

			try {
				val result = intersectionLineWithAABBox(Line3d(start3, finish3), box)
				if (result != null) {
					val first = Vector2d(result.line.v0.x, result.line.v0.y)
					val last = Vector2d(result.line.v1.x, result.line.v1.y)

					drawer.drawMarker(first, RED.setAlpha(1.0))
					drawer.drawMarker(last, RED.setAlpha(1.0))
				}
			} catch (t: Throwable) {
				hasException = true
			}

		}, 50)
	}
}

