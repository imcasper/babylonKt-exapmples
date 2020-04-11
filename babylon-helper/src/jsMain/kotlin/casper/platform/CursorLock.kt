package casper.platform

import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.get
import requestPointerLock
import kotlin.browser.document

fun lockCursor() {
	val canvas = document.getElementsByTagName("canvas").get(0) as? HTMLCanvasElement
	canvas?.requestPointerLock()
}


fun unlockCursor() {
	js("document.exitPointerLock()")
}