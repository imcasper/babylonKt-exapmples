package casper.loader

import casper.collection.map.IntMap2d
import casper.geometry.Vector2i
import casper.signal.concrete.EitherFuture
import casper.signal.concrete.EitherSignal
import casper.types.Bitmap
import org.khronos.webgl.Int32Array
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

fun createBitmapLoader(imageUrl: String): EitherFuture<Bitmap, String> {
	val loader = EitherSignal<IntMap2d, String>()
	createImageLoader(imageUrl).then({ image ->
		try {
			loader.accept(getBitmap(image))
		} catch (error: Throwable) {
			loader.reject("Internal error: $error")
		}
	}, {
		loader.reject(it)
	})
	return loader
}

fun getImageData(image: Image): ImageData {
	val lastCanvas = document.getElementsByName("canvas") as? HTMLCanvasElement
	val canvas = lastCanvas ?: document.createElement("canvas") as HTMLCanvasElement
	canvas.width = image.width
	canvas.height = image.height
	val context = canvas.getContext("2d") as CanvasRenderingContext2D
	context.drawImage(image, 0.0, 0.0)
	return context.getImageData(0.0, 0.0, image.width.toDouble(), image.height.toDouble())
}

fun getBitmap(image: Image): Bitmap {
	val imageData = getImageData(image)
	val jsIntArray = Int32Array(imageData.data.buffer) as IntArray
	//		val ints = IntArray(jsIntArray.length) { jsIntArray[it] }
	return Bitmap(Vector2i(image.width, image.height), jsIntArray)
}
