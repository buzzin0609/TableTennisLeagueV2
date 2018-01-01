/**
 * Test suite for playerNameValidator module
 */

import playerNameValidator from './playerNameValidator';
import mockPlayers from "../__mocks__/mockPlayers";

describe('playerNameValidator:', function () {
	it('should return false if name is one of the players', function () {
		expect(playerNameValidator('Will', mockPlayers)).toBe(false);
	});

	it('should return true if name is not one of the players', function () {
		expect(playerNameValidator('foo', mockPlayers)).toBe(true);
	})
});