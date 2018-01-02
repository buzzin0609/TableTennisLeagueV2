// @flow

import Player from "./Player";
import ajax from '../shared/ajax/ajax';
import constants from "../constants/constants";


export async function afterAddPlayerFormSubmit(playerName: string): Player {

	if (!playerName) {
		throw new TypeError('playerName string incorrect');
	}

	const player = new Player({ name: playerName });
	await addPlayer(player);
	return player;
}

async function addPlayer(player: Player): Promise<*> {
	if (!player || !(player instanceof Player)) {
		throw new TypeError('Wrong player parameter');
	}

	return ajax.post(constants.AJAX_ROUTES.ADD_PLAYER, {player});
}

export default addPlayer;
