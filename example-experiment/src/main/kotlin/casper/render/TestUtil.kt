package casper.render

import casper.format.toHexString
import casper.types.Color4d
import casper.geometry.Vector2d
import casper.geometry.polygon.Line2d
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.events.MouseEvent
import kotlin.math.roundToInt

class CanvasDrawer(val context: CanvasRenderingContext2D) {
	var scale = Vector2d(10.0, 10.0)
	var origin = Vector2d(0.0, 0.0)
	var size = Vector2d(500.0, 500.0)

	private fun toColor(color: Color4d): String {
		return "#${color.toHexString()}"
	}

	private fun transform(value: Vector2d): Vector2d {
		return Vector2d(origin.x + value.x * scale.x, origin.y + value.y * scale.y)
	}

	private fun scale(value: Vector2d): Vector2d {
		return Vector2d(value.x * scale.x, value.y * scale.y)
	}

	fun drawCell(value: Vector2d, color: Color4d) {
		drawRect(value, Vector2d.XY, color)
	}

	fun drawRect(start: Vector2d, size: Vector2d, color: Color4d) {
		context.fillStyle = toColor(color)
		val startT = transform(start)
		val sizeT = scale(size)
		context.fillRect(startT.x, startT.y, sizeT.x, sizeT.y)
	}

	fun drawMarker(place: Vector2d, color: Color4d) {
		val radius1 = Vector2d(0.05, 0.05)
		val radius2 = Vector2d(0.05, -0.05)

		drawLine(place - radius1, place + radius1, color)
		drawLine(place - radius2, place + radius2, color)
	}


	fun drawLine(start: Vector2d, finish: Vector2d, color: Color4d) {
		context.beginPath();
		context.lineWidth = 1.0;
		context.strokeStyle = toColor(color)
		val startT = transform(start)
		val finishT = transform(finish)
		context.moveTo(startT.x, startT.y)
		context.lineTo(finishT.x, finishT.y)
		context.closePath();
		context.stroke();
	}

	fun drawPath(points: List<Vector2d>, color: Color4d) {
		if (points.size == 0) return

		context.beginPath();
		context.lineWidth = 0.0;
		context.fillStyle = toColor(color)

		val last = points[points.size - 1]
		val lastT = transform(last)
		context.moveTo(lastT.x, lastT.y)
		for (next in points) {
			val nextT = transform(next)
			context.lineTo(nextT.x, nextT.y)
		}
		context.closePath();
		context.fill();
	}

	fun drawGrid(color: Color4d) {
		val MAXX = (size.x / scale.x).roundToInt()
		val MAXY = (size.y / scale.y).roundToInt()

		context.beginPath();
		context.lineWidth = 1.0;
		context.strokeStyle = "#${color.toHexString()}"
		for (x in 1..MAXX) {
			for (y in 1..MAXY) {
				context.moveTo(origin.x + scale.x * 0, origin.y + scale.y * y)
				context.lineTo(origin.x + scale.x * MAXX, origin.y + scale.y * y)
				context.moveTo(origin.x + scale.x * x, origin.y + scale.y * 0)
				context.lineTo(origin.x + scale.x * x, origin.y + scale.y * MAXY)

				if (x == 1 || y == 1) {
					context.fillText("$x,$y", origin.x + scale.x * x, origin.y + scale.y * y)
				}
			}
		}
		context.closePath();
		context.stroke();
	}
}


class LineSupplier(canvas: HTMLCanvasElement, drawer: CanvasDrawer) {
	private var drawing = false
	private var start = Vector2d.ZERO
	private var finish = Vector2d.ZERO

	init {
		canvas.addEventListener("mousedown", {
			if (it is MouseEvent) {
				start = Vector2d(it.clientX.toDouble() / drawer.scale.x, it.clientY.toDouble() / drawer.scale.y)
				drawing = true
			}
		})

		canvas.addEventListener("mouseup", {
			if (it is MouseEvent) {
				finish = Vector2d(it.clientX.toDouble() / drawer.scale.x, it.clientY.toDouble() / drawer.scale.y)
				drawing = false
			}
		})

		canvas.addEventListener("mousemove", {
			if (it is MouseEvent && drawing) {
				finish = Vector2d(it.clientX.toDouble() / drawer.scale.x, it.clientY.toDouble() / drawer.scale.y)
			}
		})
	}

	fun getLine(): Line2d {
		return Line2d(start, finish)
	}
}