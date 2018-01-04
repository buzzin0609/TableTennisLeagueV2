// @flow
/**
 * Description: Menu button for the app header
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import baseViewLayoutStyles from "../layout/baseViewLayoutStyles";
import {Button, Icon} from "native-base";
import toggleMainMenu from "./mainMenu/toggleMainMenu";

type Props = {
	toggleMenu: Function,
	navigate: Function
}

class MenuButton extends Component<Props> {
  render() {
    return (
		<Button transparent onPress={() => toggleMainMenu(this.props.toggleMenu, this.props.navigate)}>
			<Icon name='menu' style={baseViewLayoutStyles.iconsLight} />
		</Button>
    )
  }
}

export default MenuButton