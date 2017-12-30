// @flow
/**
 * Description: toggle the action sheet menu
 */

import typeof {ActionSheet} from 'native-base';

export type ToggleMenuArgs = {
	ActionSheet: ActionSheet,
	options: Array<*>,
	cancelIndex: number,
	deleteIndex?: number,
	title: string,
	buttonCallback: Function
};

export default function toggleMenu(args: ToggleMenuArgs) {
	args.ActionSheet.show({
		options: args.options,
		cancelButtonIndex: args.cancelIndex,
		destructiveButtonIndex: args.deleteIndex,
		title: args.title
	}, args.buttonCallback);
}
