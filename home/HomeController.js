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

type ControllerArgs = {
	ajaxService: IAjax
}

class HomeController {
	constructor(args: ControllerArgs) {
		this.ajaxService = args.ajaxService;
	}

	getPlayers() {
		this.ajaxService.getJSON('/rest/league/players')
			.then(this.addPlayers);
	}

	addPlayers({data}) {
		State.update({
			players: data.map(player => new PlayerType(player))
		});
	}
}

export default new HomeController({
	ajaxService: Ajax
});