/**
 * Test suite for toggleMenu module
 */

import expect from 'expect';
import toggleMenu from './toggleMenu';

describe('toggleMenu:', function toggleMenuTest() {

	function doToggle(ActionSheet, options = [], buttonCallback = () => {}, cancelIndex = 5, deleteIndex = 2, title: 'foo') {
		toggleMenu({
			ActionSheet,
			options,
			buttonCallback,
			cancelIndex,
			deleteIndex,
			title
		});
	}

	it('should fire the ActionSheet .show method', function () {
		const ActionSheet = {
			show: jest.fn()
		};

		doToggle(ActionSheet);

		expect(ActionSheet.show.mock.calls.length).toBe(1);

	});
});