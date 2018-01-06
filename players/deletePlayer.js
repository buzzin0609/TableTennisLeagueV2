// @flow

import type {IAjax} from "../shared/ajax/IAjax";
import constants from "../constants/constants";
import {HomeController} from "../home/HomeController";
import catchify from "../shared/catchify";
import {State} from "../state/State";

export default function deletePlayer(ajax: IAjax, _HomeController: HomeController, _State: State): Function {
	return async function handleDelete(playerName: string): Promise<void> {
		const [err, response] = await catchify(ajax.post(constants.AJAX_ROUTES.DELETE_PLAYER, `player=${playerName}`));

		if (!err) {
			_HomeController.getPlayers();
			_State.update({
				showModal: false
			});
		}
	}
}