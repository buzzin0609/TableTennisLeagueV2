/**
 * Test suite for ensureArray module
 */

import expect from 'expect';
import ensureArray from './ensureArray';

describe('ensureArray:', function () {
	it('should return an array if primitive passed in', function() {
		expect(ensureArray('hey')).toEqual(['hey']);
		expect(ensureArray(1)).toEqual([1]);
		expect(ensureArray(true)).toEqual([true]);
		expect(ensureArray(false)).toEqual([false]);
	});

	it('should return an array with undefined as only value if no value passed in', function() {
		expect(ensureArray()).toEqual([undefined]);
	});

	it('should return the original array when array passed in', function () {
		expect(ensureArray(['hey'])).toEqual(['hey']);
	});
});
