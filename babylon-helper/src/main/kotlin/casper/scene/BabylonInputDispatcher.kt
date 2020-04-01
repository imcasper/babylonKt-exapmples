package casper.scene

import BABYLON.*
import casper.geometry.Vector2d
import casper.input.*
import casper.signal.concrete.Signal
import org.w3c.dom.events.WheelEvent
import org.w3c.dom.pointerevents.PointerEvent

open class BabylonInputDispatcher() : InputDispatcher {
	companion object {
		fun getMouseButton(buttonIndex: Int): MouseButton {
			return MouseButton(buttonIndex)
		}
	}

	override val onKeyUp = Signal<KeyUp>()
	override val onKeyDown = Signal<KeyDown>()

	override val onMouseWheel = Signal<MouseWheel>()
	override val onMouseUp = Signal<MouseUp>()
	override val onMouseDown = Signal<MouseDown>()
	override val onMouseMove = Signal<MouseMove>()

	fun onMouse(info: PointerInfoBase) {
		val pointer = info.event
		if (pointer is PointerEvent) {
			val position = Vector2d(pointer.x, pointer.y)
			val movement = Vector2d(pointer.movementX, pointer.movementY)
			when (info.type) {
				PointerEventTypes.POINTERMOVE -> onMouseMove.set(MouseMove(position, movement))
				PointerEventTypes.POINTERDOWN -> onMouseDown.set(MouseDown(getMouseButton(pointer.button.toInt()), position, movement))
				PointerEventTypes.POINTERUP -> onMouseUp.set(MouseUp(getMouseButton(pointer.button.toInt()), position, movement))
			}
		} else if (pointer is WheelEvent) {
			val position = Vector2d(pointer.x, pointer.y)
			when (info.type) {
				PointerEventTypes.POINTERWHEEL -> onMouseWheel.set(MouseWheel(position, pointer.deltaY))
			}
		}
	}

	fun onKeyboard(info: KeyboardInfo) {
		val button = KeyButton(info.event.keyCode, info.event.charCode.toChar())
		when (info.type) {
			KeyboardEventTypes.KEYDOWN -> {
				onKeyDown.set(KeyDown(button))
			}
			KeyboardEventTypes.KEYUP -> {
				onKeyUp.set(KeyUp(button))
			}
			else -> throw Error("Invalid Keyboard event $info")
		}
	}

}