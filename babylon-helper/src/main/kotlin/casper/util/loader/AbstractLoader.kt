package casper.util.loader

import casper.signal.EitherFuture
import casper.signal.EitherSignal
import org.w3c.xhr.XMLHttpRequest
import org.w3c.xhr.XMLHttpRequestResponseType

inline fun <reified T> loadAbstractData(url: String, responseType: XMLHttpRequestResponseType): EitherFuture<T, String> {
	val request = XMLHttpRequest()

	val future = EitherSignal<T, String>()
	request.onloadend = {
		if (request.status == 200.toShort()) {
			val response = request.response
			if (response is T) {
				future.accept(response)
			} else {
				future.reject("Invalid data type: $it")
			}
		} else {
			future.reject("Load failed: $it")
		}
	}
	request.onerror = {
		future.reject("Load failed: $it")
	}

	request.responseType = responseType
	request.open("GET", url)
	request.send()

	return future
}