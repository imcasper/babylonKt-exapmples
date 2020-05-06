package casper.util

import casper.geometry.polygon.Octagon
import casper.geometry.polygon.Quad
import casper.geometry.polygon.Triangle
import casper.render.vertex.Vertex
import casper.render.vertex.Vertices


class VerticesBuilder {
	private val values = mutableListOf<Vertex>()

	fun get():Vertices {
		return values
	}

	fun add(shape: Triangle<Vertex>):Vertices {
		values.add(shape.v0)
		values.add( shape.v1)
		values.add(shape.v2)
		return values
	}

	fun add(shape: Quad<Vertex>): Vertices {
		add(shape.getFace(0))
		add(shape.getFace(1))
		return values
	}

	fun add(shape: Octagon<Vertex>): Vertices {
		shape.getFaces().forEach {
			add(it)
		}
		return values
	}
}
