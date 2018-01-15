// @flow
/**
 * Description: model for a player
 */

export type PlayerModel = {
	name: string,
	gamesPlayed: number,
	wins: number,
	losses: number,
	rankPoints: number,
	rankPointsPrevious: number
};

class Player {
	name: string;
	gamesPlayed: number;
	wins: number;
	losses: number;
	rankPoints: number;
	rankPointsPrevious: number;

	constructor(args: PlayerModel) {
		this.name = args.name;
		this.gamesPlayed = args.gamesPlayed || 0;
		this.wins = args.wins || 0;
		this.losses = args.losses || 0;
		this.rankPoints = args.rankPoints || 0;
		this.rankPointsPrevious = args.rankPointsPrevious || 0;
	}
}

export default Player;