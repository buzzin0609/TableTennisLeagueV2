// @flow
import MenuButtonType from "../MenuButtonType";


export default function mainMenuCallback(buttons: Array<MenuButtonType>, navigate: Function) {
	if (!buttons || !Array.isArray(buttons) || !navigate) {
		throw new Error('buttons Array parameter and navigate function parameter are required');
	}

	return function handleOnPress(buttonIndex: number) {
		if (buttons[buttonIndex] && buttons[buttonIndex].viewName) {
			buttons[buttonIndex].onPress(navigate);
		}
	}
}