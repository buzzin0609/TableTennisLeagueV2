/**
 * Test suite for GamePlayer module
 */

import {GamePlayer} from './GamePlayer';
import Player from "./Player";

describe('GamePlayer:', function () {
	it('should return player props with the points added', function() {
		const gamePlayer = new GamePlayer({
			player: new Player({name: 'Will'}),
			points: 11
		});
		const expected = {
			name: 'Will',
			gamesPlayed: 0,
			wins: 0,
			losses: 0,
			rankPoints: 0,
			rankPointsPrevious: 0,
			points: 11
		};

		expect(gamePlayer).toEqual(expected);
	});
});