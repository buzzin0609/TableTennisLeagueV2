// @flow

import type {GameArgs} from "./AddNewGameController";
import Player from "../players/Player";
import {GamePlayer} from "../players/GamePlayer";

type PreNewGameArgs = {
	player1Name: string,
	player2Name: string,
	players: Array<Player>,
	points1: number,
	points2: number
}

export default function prepareNewGameArgs({player1Name, player2Name, players, points1, points2}: PreNewGameArgs): GameArgs {
	const {
		player1,
		player2
	} = players.reduce((acc, player) => {
		if (player) {
			if (player.name === player1Name) acc.player1 = player;
			if (player.name === player2Name) acc.player2 = player;
		}

		return acc;
	}, {});
	return {
		player1: new GamePlayer({
			player: player1 || {},
			points: points1
		}),
		player2: new GamePlayer({
			player: player2 || {},
			points: points2
		})
	};
}