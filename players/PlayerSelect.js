import React, {Component} from 'react';
import Player from "./Player";
import {Picker} from "native-base";

type Props = {
	players: Array<Player>,
	onValueChange: Function,
	placeholder: string,
	style: Object,
	useSelectedValue: boolean
};

type State = {
	selected: string
}

const Item = Picker.Item;

class PlayerSelect extends Component<Props> {
	static defaultProps = {
		players: [],
		useSelectedValue: false,
		onValueChange: () => {}
	};

	state = {
		selected: ''
	};

	render() {
		return (
			<Picker
				mode={'dropdown'}
				placeholder={this.props.placeholder}
				onValueChange={this.props.useSelectedValue && this.onValueChange.bind(this) || this.props.onValueChange}
				style={this.props.style}
				selectedValue={this.state.selected}
			>
				{this.props.players.map(player => (
					<Item key={player.name} label={player.name} value={player.name}/>
				))}
			</Picker>
		)
	}

	onValueChange(value: string) {
		this.setState({
			selected: value
		});
	}
}

export default PlayerSelect;