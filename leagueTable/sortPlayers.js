// @flow
import Player from "../players/Player";

export default function sortPlayers(players: Array<Player>) {
	return players.sort((player1, player2) => {
		const rp1 = parseFloat(player1.rankPoints);
		const rp2 = parseFloat(player2.rankPoints);

		if (rp1 > rp2) return -1;

		if (rp1 < rp2) return 1;

		return 0;
	});
}