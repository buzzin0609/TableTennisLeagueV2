/**
 * Test suite for mainMenuCallback module
 */

import expect from 'expect';
import mainMenuCallback from './mainMenuCallback';
import MenuButtonType from "../MenuButtonType";

describe('mainMenuCallback:', function () {

	function expectThrow(params) {
		expect(() => mainMenuCallback(params)).toThrow();
	}

	it('should throw error if none or incorrect parameters passed in', function () {
		expectThrow();
		expectThrow({foo: 'bar'});
		expectThrow('foobar');
	});

	it('should return a function', function() {
		expect(typeof mainMenuCallback([new MenuButtonType({
			text: 'foo',
			icon: 'bar',
			iconColor: 'foobar',
			viewName: 'fizz'
		})], jest.fn())).toEqual('function');
	});

	it('should fire button .onPress function when returned callback is triggered', function() {
		const button = new MenuButtonType({
			text: 'foo',
			icon: 'bar',
			iconColor: 'foobar',
			viewName: 'fizz'
		});
		button.onPress = jest.fn();
		const menuCB = mainMenuCallback([button], jest.fn());
		menuCB(0);

		expect(button.onPress.mock.calls.length).toBe(1);
	});

	it('should execute navigate function passed into button onPress handler', function () {
		const cb = jest.fn();

		mainMenuCallback([
			new MenuButtonType({
				text: 'foo',
				icon: 'bar',
				iconColor: 'foobar',
				viewName: 'fizz'
			})
		], cb)(0);

		expect(cb.mock.calls.length).toBe(1);
	})
});