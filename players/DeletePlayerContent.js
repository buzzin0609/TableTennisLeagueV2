// @flow
import React, { Component } from 'react';
import PlayersModalContent from "./PlayersModalContent";
import PlayerSelect from "./PlayerSelect";
import Player from "./Player";
import deletePlayer from "./deletePlayer";
import ajax from "../shared/ajax/ajax";
import HomeController from "../home/HomeController";
import State from "../state/State";
import playerFormStyles from "./playerFormStyles";

type Props = {
	players: Array<Player>
};

class DeletePlayerContent extends Component<Props> {

  render() {
    return (
		<PlayersModalContent title={'Delete Player'} style={playerFormStyles.deleteModal}>
			<PlayerSelect
				players={this.props.players}
				placeholder={'Choose Player to Delete'}
				onValueChange={deletePlayer(ajax, HomeController, State)}
				style={playerFormStyles.deleteButton}
			/>
		</PlayersModalContent>
    );
  }
}

export default DeletePlayerContent