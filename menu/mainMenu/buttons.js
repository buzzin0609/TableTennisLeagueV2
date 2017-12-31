// @flow
import MenuButtonType from "../MenuButtonType";

/**
 * Description: buttons for the main menu
 */

const MAIN_MENU_BUTTONS: Array<MenuButtonType> = [
	new MenuButtonType({
		text: 'Add New Player',
		icon: 'home',
		iconColor: '#000',
		viewName: 'addPlayer'
	}),
	new MenuButtonType({
		text: 'Delete Player',
		icon: 'analytics',
		iconColor: '#000',
		viewName: 'DeletePlayer'
	}),
	new MenuButtonType({
		text: 'Add New Game',
		icon: 'user',
		iconColor: '#000',
		viewName: 'AddGame'
	}),
	new MenuButtonType({
		text: 'Cancel',
		icon: 'close',
		iconColor: '#000'
	})
];

export default MAIN_MENU_BUTTONS;