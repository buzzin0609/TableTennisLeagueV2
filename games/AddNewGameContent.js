// @flow

import React, {Component} from 'react';
import {View} from 'react-native';
import playerFormStyles from "../players/playerFormStyles";
import PlayersModalContent from "../players/PlayersModalContent";
import PlayerSelect from "../players/PlayerSelect";
import {Button, Input, Item, Label} from "native-base";
import Player from "../players/Player";
import Text from "../layout/Text";

type Props = {
	players: Array<Player>
};

type State = {
	score1: number,
	score2: number
}

class AddNewGameContent extends Component<Props, State> {
	static defaultProps = {
		players: []
	};

	state = {
		score1: 0,
		score2: 0
	};

	render() {
		return (
			<PlayersModalContent title={'Add New Game'} style={playerFormStyles.deleteModal}>
				{ this.renderPlayerSelect('Choose First Player') }
				{ this.renderPlayerScoreInput(
					(value => this.setState({score1: value})),
					this.state.score1.toString()
				)}
				{ this.renderPlayerSelect('Choose Second Player') }
				{ this.renderPlayerScoreInput(
					(value => this.setState({score2: value})),
					this.state.score2.toString()
				)}

				<Button onPress={() => {}} title={'submit new game'} full style={playerFormStyles.button}>
					<Text style={playerFormStyles.buttonText}>Submit</Text>
				</Button>
			</PlayersModalContent>
		)
	}

	renderPlayerSelect(placeholder: string): PlayerSelect {
		return (
			<PlayerSelect
				players={this.props.players}
				placeholder={placeholder}
				onValueChange={() => {
				}}
				useSelectedValue={true}
				style={playerFormStyles.addGameSelect}/>
		);
	}

	renderPlayerScoreInput(onChange: Function, value: string): Item {
		return (
			<Item style={playerFormStyles.addGameScore}>
				<Input keyboardType={'numeric'} onChangeText={onChange} value={value}/>
			</Item>
		)
	}
}

export default AddNewGameContent