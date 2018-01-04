// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import playerFormStyles from "./playerFormStyles";
import {Button, Form, Item, Label} from "native-base";
import Text from "../layout/Text";

type Props = {
	buttonText: string,
	onPress: Function,
	itemProps: Object,
	children: Array<*>
};

class PlayerActionForm extends Component<Props> {

	render() {
		return (
			<Form>
				<Item {...this.props.itemProps}>
					{this.props.children}
				</Item>
				<Button style={playerFormStyles.button} title={`Submit`} full onPress={this.props.onPress}>
					<Text style={playerFormStyles.buttonText}>{this.props.buttonText}</Text>
				</Button>
			</Form>
		)
	}
}

export default PlayerActionForm