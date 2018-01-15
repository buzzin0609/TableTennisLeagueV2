// @flow

import constants from "../constants/constants";
import Ajax from '../shared/ajax/ajax';
import HomeController from "../home/HomeController";
import catchify from "../shared/catchify";
import {GamePlayer} from "../players/GamePlayer";
import State from "../state/State";

export type GameArgs = {
	player1: GamePlayer,
	player2: GamePlayer
};

export class AddNewGameController {

	async addNewGame(args: GameArgs) {
		if (this.isValid(args)) {
			const [err, result] = await catchify(
				Ajax.post(constants.AJAX_ROUTES.ADD_NEW_GAME,
						'game=' + JSON.stringify(args)
					)
			);

			if (err) {
				return false;
			}

			await HomeController.getPlayers();
			State.update({
				showModal: false
			});

			return true;
		}

		return false;
	}

	isValid({player1, player2}: GameArgs): boolean {
		if (
			[player1, player2].includes(undefined) ||
			player1.name === player2.name ||
			![player1, player2].every(player => player instanceof GamePlayer) ||
			Math.abs(player1.points - player2.points) < 2
		) return false;

		return true;
	}
}

export default new AddNewGameController();