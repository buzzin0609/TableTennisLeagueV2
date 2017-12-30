/**
 * Test suite for toggleMainMenu module
 */

import expect from 'expect';
import toggleMainMenu from './toggleMainMenu';

describe('toggleMainMenu:', function () {

	it('should fire the toggleMenu function', function () {
		const cb = jest.fn();

		toggleMainMenu(cb, jest.fn());

		expect(cb.mock.calls.length).toBe(1);
	});

});