package casper.util.loader

import casper.signal.Promise
import org.khronos.webgl.ArrayBuffer
import org.w3c.xhr.ARRAYBUFFER
import org.w3c.xhr.XMLHttpRequestResponseType

fun loadBinaryData(url: String): Promise<ArrayBuffer, String> {
	return loadAbstractData(url, XMLHttpRequestResponseType.ARRAYBUFFER)
}
