// @flow
import type {ToggleMenuArgs} from "../toggleMenu";
import {ActionSheet} from "native-base";
import typeof toggleMenu from "../toggleMenu";
import mainMenuCallback from "./mainMenuCallback";
import buttons from "./buttons";


export default function toggleMainMenu(toggler: toggleMenu, navigate: Function) {
	const args: ToggleMenuArgs = {
		ActionSheet: ActionSheet,
		cancelIndex: buttons.length - 1,
		title: 'League Menu',
		options: buttons,
		buttonCallback: mainMenuCallback(buttons, navigate)
	};

	toggler(args);
}