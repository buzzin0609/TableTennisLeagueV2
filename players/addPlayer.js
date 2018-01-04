// @flow

import Player from "./Player";
import ajax from '../shared/ajax/ajax';
import constants from "../constants/constants";
import catchify from "../shared/catchify";
import State from "../state/State";
import HomeController from "../home/HomeController";


export async function afterAddPlayerFormSubmit(playerName: string): Player {

	if (!playerName) {
		throw new TypeError('playerName string incorrect');
	}

	const player = new Player({ name: playerName });
	const [err, response] = await catchify(exports.default(player));

	if (!err) {
		State.update({
			showModal: false
		});

		HomeController.getPlayers();
	}

	return player;
}

async function addPlayer(player: Player): Promise<*> {
	if (!player || !(player instanceof Player)) {
		throw new TypeError('Wrong player parameter');
	}

	return ajax.post(constants.AJAX_ROUTES.ADD_PLAYER,
		'player=' + JSON.stringify(player)
	);
}

export default addPlayer;
