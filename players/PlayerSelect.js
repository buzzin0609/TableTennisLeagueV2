import React, {Component} from 'react';
import Player from "./Player";
import {Picker} from "native-base";
import playerFormStyles from "./playerFormStyles";

type Props = {
	players: Array<Player>,
	onValueChange: Function
}


const Item = Picker.Item;

class PlayerSelect extends Component<Props> {
	static defaultProps = {
		players: []
	};

	render() {
		return (
			<Picker
				mode={'dropdown'}
				placeholder={'Choose Player to Delete'}
				onValueChange={this.props.onValueChange}
				style={playerFormStyles.deleteButton}
			>
				{this.props.players.map(player => (
					<Item key={player.name} label={player.name} value={player.name}/>
				))}
			</Picker>
		)
	}
}

export default PlayerSelect;