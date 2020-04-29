package casper.loader

import casper.signal.concrete.EitherFuture
import casper.signal.concrete.EitherSignal
import org.w3c.dom.Image

fun createImageLoader(imageUrl: String): EitherFuture<Image, String> {
	val loader = EitherSignal<Image, String>()
	val image = Image()
	image.src = imageUrl
	if (image.complete) {
		loader.accept(image)
	} else {
		image.onload = {
			loader.accept(image)
		}
		image.onerror = { _, it, _, _, _ ->
			loader.reject("Can't load $imageUrl")
		}
	}
	return loader
}
