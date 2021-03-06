/**
 * Created by Will Busby on 22/12/2017.
 * Description:
 */

import React from "react";
import baseViewLayoutStyles from "../layout/baseViewLayoutStyles";
import MainMenuButton from "../menu/MainMenuButton";
import toggleMenu from "../menu/toggleMenu";
import State from "../state/State";
import mainMenuComponents, {componentsObject} from "../menu/mainMenu/mainMenuComponents";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";

let previous = void 0;

export default {
	initialRouteName: 'Home',
	navigationOptions: ({navigation}) => {
		(!State.has('navigate') && State.add({
			navigate: navigation.navigate
		}));

		return {
			title: `Busby League`,
			headerStyle: baseViewLayoutStyles.header,
			headerMode: 'float',
			headerRight: (
				<MainMenuButton toggleMenu={toggleMenu} navigate={viewName => State.update({ modalView: viewName, showModal: true })} />
			),
			headerLeft: null,
			headerTintColor: '#fff',
			onNavigationStateChange: (prevState, currentState) => {
				previous = prevState;
				console.log('state changed', prevState, currentState);
			}
		}
	}
};