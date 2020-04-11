package casper.util

import BABYLON.GUI.Container
import BABYLON.GUI.Control
import BABYLON.GUI.TextBlock
import BABYLON.Scene

class TextArea(val scene: Scene, customRoot: Container? = null) {
	private val output = TextBlock()

	init {
		output.text = "";
		output.color = "red";
		output.fontSize = 16;
		output.height = "180px";
		output.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT
		output.verticalAlignment = Control.VERTICAL_ALIGNMENT_BOTTOM

		// GUI
		if (customRoot == null) {
			val advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
			advancedTexture.addControl(output);
		} else {
			customRoot.addControl(output)
		}
	}

	fun setText(value: String) {
		output.text = value
	}
}
