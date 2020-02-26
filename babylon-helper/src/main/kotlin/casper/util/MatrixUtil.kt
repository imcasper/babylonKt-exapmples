package casper.util

import BABYLON.Matrix
import org.khronos.webgl.get


fun Matrix.toStringLines():String {
	var result = ""
	for (i in 0 until m.length) {
		if ((i%4==0)) result += "\n"
		result += "" + m.get(i).toString() + "; "
	}
	return result
}