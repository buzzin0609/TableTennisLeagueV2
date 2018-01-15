/**
 * Test suite for prepareNewGameArgs module
 */

import prepareNewGameArgs from './prepareNewGameArgs';
import mockPlayers from "../__mocks__/mockPlayers";

describe('prepareNewGameArgs:', function () {
	it('should return an object with player1 and player2', function() {
		expect(Object.keys(prepareNewGameArgs({player1Name: 'Will', player2Name: 'Bill', players: mockPlayers, points1: 11, points2: 3}))).toEqual(expect.arrayContaining(['player1', 'player2']));
	});
});