package casper.util.loader

import casper.signal.Promise
import org.w3c.xhr.TEXT
import org.w3c.xhr.XMLHttpRequestResponseType

fun loadTextData(url: String): Promise<String, String> {
	return loadAbstractData(url, XMLHttpRequestResponseType.TEXT)
}

