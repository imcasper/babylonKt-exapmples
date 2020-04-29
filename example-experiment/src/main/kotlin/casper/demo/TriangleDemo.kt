package casper.demo

import casper.geometry.Vector3d
import casper.geometry.polygon.Triangle3d
import casper.geometry.polygon.Line3d
import casper.geometry.polygon.intersectionLineWithTriangle
import casper.types.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear

class TriangleDemo {

	fun run() {
		val canvas = document.getElementById("renderCanvas")
		if (!(canvas is HTMLCanvasElement)) {
			throw Error("Cant find canvas with id renderCanvas")
		}

		val context = canvas.getContext("2d")
		if (context !is CanvasRenderingContext2D) return

		val drawer = CanvasDrawer(context)
		val supplier = LineSupplier(canvas, drawer)

		window.setInterval({
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			canvas.clear()

			val line = supplier.getLine()
			drawer.drawLine(line.v0, line.v1, BLUE.setAlpha(1.0))

			val triangle = Triangle3d(Vector3d(3.0, 1.0, 0.0), Vector3d(2.0, 5.0, -2.0), Vector3d(4.0, 5.0, 2.0))

			drawer.drawPath(listOf(triangle.v0.getXY(), triangle.v1.getXY(), triangle.v2.getXY()), GRAY.setAlpha(1.0))

			val intersection = intersectionLineWithTriangle(Line3d(line.v0.setZ(), line.v1.setZ()), triangle)
			if (intersection != null) {
				drawer.drawMarker(intersection.getXY(), RED.setAlpha(1.0))
			}

			drawer.drawGrid(BLACK.setAlpha(1.0))

		}, 50)
	}
}

