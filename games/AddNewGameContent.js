import React, {Component} from 'react';
import {View} from 'react-native';
import playerFormStyles from "../players/playerFormStyles";
import PlayersModalContent from "../players/PlayersModalContent";
import PlayerSelect from "../players/PlayerSelect";
import {Input, Item, Label} from "native-base";
import Player from "../players/Player";

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
				<PlayerSelect
					players={this.props.players}
					placeholder={'First Player'}
					onValueChange={() => {
					}}
					useSelectedValue={true}
					style={playerFormStyles.addGameSelect}/>
				<Item style={playerFormStyles.addGameScore}>
					<Input keyboardType={'numeric'} onChange={value => this.setState({score1: value})} value={this.state.score1.toString()}/>
				</Item>
				<PlayerSelect
					players={this.props.players}
					placeholder={'Second Player'}
					onValueChange={() => {}}
					useSelectedValue={true}
					style={playerFormStyles.addGameSelect}/>
				<Item style={playerFormStyles.addGameScore}>
					<Input keyboardType={'numeric'} onChange={value => this.setState({score2: value})} value={this.state.score2.toString()}/>
				</Item>
			</PlayersModalContent>
		)
	}
}

export default AddNewGameContent