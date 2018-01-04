import React, {Component} from 'react';
import Text from "../layout/Text";
import Player from "./Player";
import {Button, Form, Input, Item, Label} from "native-base";
import playerNameValidator from "./playerNameValidator";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";
import playerFormStyles from "./playerFormStyles";
import PlayerActionForm from "./PlayerActionForm";

type Props = {
	players: Array<Player>,
	afterSubmit?: Function
};

type State = {
	isClean: boolean,
	isValid: boolean,
	value: string,
	buttonText: string
};

class AddPlayerForm extends Component<Props, State> {

	state = {
		isClean: true,
		isValid: false,
		value: '',
		buttonText: 'Submit'
	};

	render() {

		const inputProps = {
			floatingLabel: true,
			style: {maxWidth: this.props.width - 30}
		};

		if (!this.state.isClean && !this.state.isValid) {
			inputProps.error = true;
		} else {
			inputProps.success = true;
		}

		return (
			<PlayerActionForm itemProps={inputProps} buttonText={this.state.buttonText} onPress={this.onSubmit.bind(this)}>
				<Label>
					Player Name
				</Label>
				<Input onChangeText={value => this.setState({value})} value={this.state.value} />
			</PlayerActionForm>
		);
	}

	onSubmit() {
		let isClean = false;
		let isValid = this.state.value.length > 0 &&
			playerNameValidator(this.state.value, this.props.players);
		let buttonText = isValid && 'Adding' || 'Submit';

		this.setState({
			isValid, isClean, buttonText
		});

		if (isValid && this.props.afterSubmit) {
			this.props.afterSubmit(this.state.value);
		}

	}
}

export default AddPlayerForm;