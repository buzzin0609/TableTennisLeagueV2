/**
 * Description: Controller for
 */
import AppText from "../layout/Text";
import React from "react";
import type {IAjax} from "../shared/ajax/IAjax";
import Ajax from '../shared/ajax/ajax';
import State from "../state/State";
import PlayerType from "../players/Player";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";
import constants from "../constants/constants";

type ControllerArgs = {
	ajaxService: IAjax
}

export class HomeController {
	constructor(args: ControllerArgs) {
		this.ajaxService = args.ajaxService;
	}

	getPlayers() {
		this.ajaxService.getJSON(constants.AJAX_ROUTES.GET_PLAYERS)
			.then(this.addPlayers);
	}

	addPlayers({data}) {
		State.update({
			players: data.map(player => new PlayerType(player))
		});
	}
}

export default new exports.HomeController({
	ajaxService: Ajax
});