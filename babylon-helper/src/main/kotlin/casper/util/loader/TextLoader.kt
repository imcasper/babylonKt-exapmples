package casper.util.loader

import casper.signal.concrete.EitherFuture
import org.w3c.xhr.TEXT
import org.w3c.xhr.XMLHttpRequestResponseType

fun loadTextData(url: String): EitherFuture<String, String> {
	return loadAbstractData(url, XMLHttpRequestResponseType.TEXT)
}

