package casper.loader

import casper.signal.concrete.EitherFuture
import casper.signal.concrete.EitherSignal
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.Image
import org.w3c.dom.ImageData
import kotlin.browser.document

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

fun createImageDataLoader(imageUrl: String): EitherFuture<ImageData, String> {
	val loader = EitherSignal<ImageData, String>()
	createImageLoader(imageUrl).then({
		loader.accept(getImageData(it))
	}, {
		loader.reject(it)
	})
	return loader
}

fun getImageData(image: Image): ImageData {
	val canvas = document.createElement("canvas") as HTMLCanvasElement
	canvas.width = image.width
	canvas.height = image.height
	val context = canvas.getContext("2d") as CanvasRenderingContext2D
	context.drawImage(image, 0.0, 0.0)
	return context.getImageData(0.0, 0.0, image.width.toDouble(), image.height.toDouble())
}
