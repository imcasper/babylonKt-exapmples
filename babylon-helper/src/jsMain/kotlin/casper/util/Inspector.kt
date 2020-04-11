package casper.util

import BABYLON.EventState
import BABYLON.KeyboardEventTypes
import BABYLON.KeyboardInfo
import BABYLON.Scene

class Inspector(val scene: Scene) {
	private var isVisible = false

	init {
		scene.onKeyboardObservable.add({ info: KeyboardInfo, _: EventState ->
			if (info.event.ctrlKey && info.event.altKey) {
				isVisible = !isVisible
				if (isVisible) {
					scene.debugLayer.show()
				} else {
					scene.debugLayer.hide()
				}
			}
		})
	}
}