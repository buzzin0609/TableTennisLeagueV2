// @flow


import Player from "./Player";

type GamePlayerArgs = {
	player: Player,
	points: number
};

export class GamePlayer extends Player {
	points: number;

	constructor({player, points}: GamePlayerArgs) {
		super(player);
		this.points = points;
	}

}