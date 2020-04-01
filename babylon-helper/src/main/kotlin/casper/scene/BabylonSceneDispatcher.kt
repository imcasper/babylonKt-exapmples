package casper.scene

import BABYLON.EventState
import BABYLON.KeyboardInfo
import BABYLON.PointerInfo
import BABYLON.Scene
import casper.input.InputDispatcher

class BabylonSceneDispatcher(scene: Scene) : BabylonInputDispatcher(), InputDispatcher {

	init {
		scene.onKeyboardObservable.add({ info: KeyboardInfo, _: EventState ->
			onKeyboard(info)
		})

		scene.onPointerObservable.add({ info: PointerInfo, _: EventState ->
			onMouse(info)
		})
	}
}