/**
 * Test suite for sortPlayers module
 */

import expect from 'expect';
import sortPlayers from './sortPlayers';

describe('sortPlayers:', function () {
	it('should sort players according to rankPoints', function() {
		const players = [
			{ name: 'Bill', rankPoints: 5},
			{ name: 'Foo', rankPoints: 7},
			{ name: 'Will', rankPoints: 10}
		];

		const sorted = sortPlayers(players);
		expect(sorted[0].name).toEqual('Will');
		expect(sorted[2].name).toEqual('Bill');
	});
});