package casper.voxel.app

import casper.demo.CanvasDrawer
import casper.demo.LineSupplier
import casper.geometry.Vector2d
import casper.geometry.polygon.setZ
import casper.types.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.clear
import kotlin.random.Random

class LineDemo {
	val use2d = false

	fun run() {
		val canvas = document.getElementById("renderCanvas")
		if (!(canvas is HTMLCanvasElement)) {
			throw Error("Cant find canvas with id renderCanvas")
		}

		val context = canvas.getContext("2d")
		if (context !is CanvasRenderingContext2D) return


		val random = Random(0)

		var hasException = false


		val drawerXY = CanvasDrawer(context)
		val drawerXZ = CanvasDrawer(context)

		drawerXY.scale = Vector2d(60.0, 60.0)
		drawerXY.size = Vector2d(700.0, 800.0)

		drawerXZ.origin = Vector2d(750.0, 0.0)
		drawerXZ.scale = Vector2d(60.0, 60.0)
		drawerXZ.size = Vector2d(700.0, 800.0)

		val supplier = LineSupplier(canvas, drawerXY)

		window.setInterval({
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
			canvas.clear()

			if (hasException) {
				drawerXY.drawRect(Vector2d.ZERO, Vector2d(10.0, 10.0), RED.setAlpha(1.0))
				hasException = false
			}

			val line2d = supplier.getLine()
			val line3d = line2d.setZ(-2.5, 10.5)

			drawerXY.drawGrid(BLACK.setAlpha(1.0))
			drawerXY.drawLine(line3d.v0.getXY(), line3d.v1.getXY(), BLUE.setAlpha(1.0))

			drawerXZ.drawGrid(BLACK.setAlpha(1.0))
			drawerXZ.drawLine(line3d.v0.getXZ(), line3d.v1.getXZ(), BLUE.setAlpha(1.0))

			try {
				if (use2d) {
					casper.geometry.polygon.iterateLine2n(line2d) {
						drawerXY.drawCell(it.toVector2d(), GRAY.setAlpha(0.5))
						//		drawerXY.drawCell(getXY(it.toVector3d()), GRAY_TRANSPARENT)
						//		drawerXZ.drawCell(getXZ(it.toVector3d()), GRAY_TRANSPARENT)
						false
					}
				} else {
					casper.geometry.polygon.iterateLine3n(line3d) {
						drawerXY.drawCell(it.getXY().toVector2d(), GRAY.setAlpha(0.5))
						drawerXZ.drawCell(it.getXZ().toVector2d(), GRAY.setAlpha(0.5))
						false
					}
				}
			} catch (t: Throwable) {
				hasException = true
			}


		}, 50)
	}

}

