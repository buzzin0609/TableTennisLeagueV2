// @flow
/**
 * Created by Will Busby on 23/12/2017.
 * Description:
 */

import React, {Component} from 'react';
import type {PlayerModel} from "../players/Player";
import PlayerCell from "../players/PlayerCell";
import headingList from "./headingList";

type Props = {
	players: PlayerModel[]
}

class LeagueTableBody extends Component<Props> {
	static defaultProps: Object = {
		players: []
	};

	render() {
		return this.props.players.map((player: PlayerModel) => {
			return <PlayerCell key={player.name} player={player} columns={headingList}/>
		});
	}
}

export default LeagueTableBody