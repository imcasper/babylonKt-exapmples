package casper.util.loader

/**
 * format description founded on
 * http://ru.esotericsoftware.com/spine-atlas-format
 */
class TextNode {
	var name: String = ""
	val properties = mutableMapOf<String, String>()
	val children = mutableListOf<TextNode>()
}


fun parseText(text: String): List<TextNode> {
	val pages = mutableListOf<TextNode>()

	val pageSources = text.removePrefix("\n").removeSuffix("\n").split("\n\n")
	pageSources.forEach { pageSource ->
		val lines = pageSource.split("\n").toMutableList()
		val title = lines.removeAt(0)

		val pageRoot = TextNode()
		pageRoot.name = title
		pages.add(pageRoot)

		var targetNode = pageRoot

		lines.forEach { line ->
			val isProperty = line.indexOf(":") >= 0

			if (isProperty) {
				//	todo: I think that space not needed (check it)
				val lineWithoutSpace = line.replace(" ", "")
				val propertyDividerIndex = lineWithoutSpace.indexOf(":")

				val propertyName = lineWithoutSpace.substring(0, propertyDividerIndex)
				val propertyValue = lineWithoutSpace.substring(propertyDividerIndex + 1)
				targetNode.properties.put(propertyName, propertyValue)
			} else {
				targetNode = TextNode()
				targetNode.name = line
				pageRoot.children.add(targetNode)
			}
		}
	}

	return pages
}