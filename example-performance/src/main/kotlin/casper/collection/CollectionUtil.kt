package casper.collection

interface Indexed {
	var index: Int
}

fun <T : Indexed> MutableList<T>.addIndexed(value: T): Boolean {
	if (value.index < 0) {
		value.index = size
		add(value)
		return true
	}
	return false
}

fun <T : Indexed> MutableList<T>.removeIndexed(value: T): Boolean {
	val valueIndex = value.index
	val item = getOrNull(valueIndex)
	if (item == value) {
		val lastIndex = size - 1
		if (lastIndex > 0) {
			val last = removeAt(lastIndex)
			if (lastIndex != valueIndex) {
				this[valueIndex] = last
				last.index = valueIndex
			}
		} else {
			clear()
		}

		value.index = -2
		return true
	}
	return false
}