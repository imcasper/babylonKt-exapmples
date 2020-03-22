package casper.util.loader

import casper.signal.EitherFuture
import casper.signal.EitherSignal
import org.w3c.dom.HTMLImageElement
import kotlin.browser.document

fun loadImage(name: String): EitherFuture<HTMLImageElement, String> {
	val onImage = EitherSignal<HTMLImageElement, String>()
	val image = document.createElement("img")
	if (image is HTMLImageElement) {
		image.src = name
		image.onload = {
			onImage.accept(image)
		}
		image.onerror = { a: Any, m: String, i: Int, k: Int, _ ->
			onImage.reject(m)
		}
	} else {
		onImage.reject("Can't create image")
	}

	return onImage
}