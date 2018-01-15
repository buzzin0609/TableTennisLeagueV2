// @flow
import React, {Component} from 'react';
import {View} from 'react-native';
import playerFormStyles from "../players/playerFormStyles";
import PlayersModalContent from "../players/PlayersModalContent";
import PlayerSelect from "../players/PlayerSelect";
import {Button, Input, Item, Label} from "native-base";
import Player from "../players/Player";
import Text from "../layout/Text";
import prepareNewGameArgs from "./prepareNewGameArgs";
import NewGameSubmitButton from "./NewGameSubmitButton";
import AddNewGameController from "./AddNewGameController";
import type {GameArgs} from "./AddNewGameController";

type State = {
	score1: number,
	score2: number,
	isError: boolean
}

class AddNewGameContent extends Component<null, State> {
	player1: PlayerSelect;
	player2: PlayerSelect;
	state: Object;


	static defaultProps = {
		players: []
	};

	state = {
		score1: 0,
		score2: 0,
		isError: false
	};

	render() {

		return (
			<PlayersModalContent
				title={'Add New Game'}
				style={playerFormStyles.deleteModal}
			>
				{
					this.state.isError && (
						<Text style={playerFormStyles.error}>
							Invalid game. Make sure both names and points are correct
						</Text>
					)
				}

				{ this.renderPlayerSelect('Choose First Player', 'player1') }
				{ this.renderPlayerScoreInput(
					(value => this.setState({score1: value})),
					this.state.score1.toString()
				)}
				{ this.renderPlayerSelect('Choose Second Player', 'player2') }
				{ this.renderPlayerScoreInput(
					(value => this.setState({score2: value})),
					this.state.score2.toString()
				)}
				{ this.renderButton() }

			</PlayersModalContent>
		)
	}

	renderPlayerSelect(placeholder: string, stateProp: string): PlayerSelect {
		return (
			<PlayerSelect
				ref={playerSelect => this[stateProp] = playerSelect}
				placeholder={placeholder}
				onValueChange={() => {}}
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

	renderButton() {
		return (
			<NewGameSubmitButton onPress={this.onSubmit.bind(this)} />
		)
	}

	async onSubmit(players: Array<Player>) {

		this.setState({
			isError: false
		});

		const args: GameArgs = prepareNewGameArgs({
			player1Name: this.player1.state.selected,
			player2Name: this.player2.state.selected,
			players: players,
			points1: this.state.score1,
			points2: this.state.score2
		});

		const result = await AddNewGameController.addNewGame(args);

		if (!result) {
			this.setState({
				isError: true
			});
		}
	}
}

export default AddNewGameContent