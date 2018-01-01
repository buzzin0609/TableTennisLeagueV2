import React, {Component} from 'react';
import {View} from 'react-native';
import Text from "../layout/Text";
import Player from "./Player";
import {Button, Form, Input, Item, Label} from "native-base";
import playerNameValidator from "./playerNameValidator";

type Props = {
	players: Array<Player>,
	afterSubmit?: Function
};

type State = {
	isClean: boolean,
	isValid: boolean,
	value: string
};

class AddPlayerForm extends Component<Props, State> {

	state = {
		isClean: true,
		isValid: false,
		value: ''
	};

	render() {

		const inputProps = {
			floatingLabel: true
		};

		if (!this.state.isClean && !this.state.isValid) {
			inputProps.error = true;
		}

		return (
			<Form>
				<Item {...inputProps}>
					<Label>
						Player Name
					</Label>
					<Input onChangeText={value => this.setState({value})} value={this.state.value}/>
				</Item>
				<Button onPress={this.onSubmit.bind(this)} title={`Submit`}>
					<Text>Submit</Text>
				</Button>
			</Form>
		);
	}

	onSubmit() {
		let isClean = false;

		let isValid = this.state.value.length > 0 &&
			playerNameValidator(this.state.value, this.props.players);

		this.setState({
			isValid, isClean
		});

		if (isValid && this.props.afterSubmit) {
			this.props.afterSubmit(this.state.value);
		}

	}
}

export default AddPlayerForm;