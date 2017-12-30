// @flow

/**
 * Description: a menu button
 */


type MenuButtonTypeArgs = {
	text: string,
	icon: string,
	iconColor: string,
	viewName?: string
}

export default class MenuButtonType {
	text: string;
	icon: string;
	iconColor: string;
	viewName: string;

	constructor({text, icon, iconColor, viewName}: MenuButtonTypeArgs) {
		this.text = text;
		this.icon = icon;
		this.iconColor = iconColor;
		this.viewName = viewName || '';
	}

	onPress(navigate: Function) {
		navigate(this.viewName);
	}
}
