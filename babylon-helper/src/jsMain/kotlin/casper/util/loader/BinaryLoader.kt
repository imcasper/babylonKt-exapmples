package casper.util.loader

import casper.signal.concrete.EitherFuture
import org.khronos.webgl.ArrayBuffer
import org.w3c.xhr.ARRAYBUFFER
import org.w3c.xhr.XMLHttpRequestResponseType

fun loadBinaryData(url: String): EitherFuture<ArrayBuffer, String> {
	return loadAbstractData(url, XMLHttpRequestResponseType.ARRAYBUFFER)
}
