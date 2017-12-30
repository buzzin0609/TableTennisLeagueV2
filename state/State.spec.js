import React from 'react';
import {State} from './State';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('State: ', function () {

	it('shouldnt save a reference to a previous variable after construction', function() {
		const initialState = {
			foo: 'bar'
		};
		const state = new State(initialState);
		initialState.foo = 'fizz';

		expect(state.get()).toEqual({
			foo: 'bar'
		});
	});

	describe('.get: ', function () {
		it('returns the global state', () => {
			const state = new State({
				foo: 'bar'
			});

			expect(state.get()).toEqual({foo: 'bar'});
		});
	});

	describe('.add: ', function () {
		it('should add a new prop to the global state', function () {
			const state = new State({
				foo: 'bar'
			});
			state.add({
				bar: 'foo'
			});

			expect(state.get()).toEqual({
				foo: 'bar',
				bar: 'foo'
			});
		});

		it('should add multiple props to the global state', function () {
			const state = new State({
				fizz: 'buzz'
			});
			state.add({
				bar: 'foo',
				foo: 'bar'
			});

			expect(state.get()).toEqual({
				fizz: 'buzz',
				bar: 'foo',
				foo: 'bar'
			});
		});

		it('should throw an error if trying to add a prop already on global props', function () {
			const state = new State({
				foo: 'bar'
			});

			expect(() => {
				state.add({
					foo: 'fizz'
				})
			}).toThrow();
		});

		it('shouldnt save a reference to a previous variable', function() {
			const addState = {
				bar: 'fizz'
			};
			const state = new State({
				foo: 'bar'
			});
			state.add(addState);
			addState.bar = 'haz';

			expect(state.get()).toEqual({
				foo: 'bar',
				bar: 'fizz'
			});
		});
	});

	describe('.update: ', function () {
		it('should update a global state prop value', function () {
			const state = new State({
				foo: 'bar'
			});
			state.update({
				foo: 'fizz'
			});

			expect(state.get()).toEqual({
				foo: 'fizz'
			});
		});

		it('should update multiple props', function () {
			const state = new State({
				foo: 'bar',
				bar: 'haz'
			});
			state.update({
				foo: 'fizz',
				bar: 'foo'
			});

			expect(state.get()).toEqual({
				foo: 'fizz',
				bar: 'foo'
			});
		});

		it('should add a new prop if not already on global props', function () {
			const state = new State({
				foo: 'bar'
			});

			state.update({
				bar: 'fizz'
			});

			expect(state.get()).toEqual({
				foo: 'bar',
				bar: 'fizz'
			});
		});

		it('should emit new state to subscriber functions', function () {
			const state = new State({
				foo: 'bar'
			});

			const cb = jest.fn(newState => {
				expect(newState).toEqual({
					foo: 'fizz'
				});
			});

			state.subscribe(cb);
			state.update({
				foo: 'fizz'
			});

			expect(cb.mock.calls.length).toBe(1);

		});
	});

	describe('.getPartialState: ', function () {
		it('should return an object mapped from an array of props', function () {
			const state = new State({
				foo: 'bar',
				fizz: 'buzz'
			});

			expect(state.getPartialState(['foo'])).toEqual({
				foo: 'bar'
			});
		});

		it('should return an object mapped from a string of comma separated props', function () {
			const state = new State({
				foo: 'bar',
				fizz: 'buzz',
				bar: 'foo'
			});

			expect(state.getPartialState('foo,bar')).toEqual({
				foo: 'bar',
				bar: 'foo'
			});
		});
	});

	describe('.ensurePropsArray: ', function () {
		const state = new State();
		it('should throw an error if no string or array passed as parameter', function () {
			expect(() => state.ensurePropsArray()).toThrow();
			expect(() => state.ensurePropsArray({foo: 'bar'})).toThrow();
			expect(() => state.ensurePropsArray(() => console.log('hey'))).toThrow();
		});

		it('should throw an error if string not comma separated', function () {
			expect(() => state.ensurePropsArray('foo bar')).toThrow();
		});

		it('should return an array if array given as parameter', function () {
			expect(Array.isArray(state.ensurePropsArray(['foo', 'bar']))).toBe(true);
		});

		it('should return an array if string given as parameter', function () {
			expect(Array.isArray(state.ensurePropsArray('foo, bar'))).toBe(true);
		});
	});

	describe('.has: ', function () {
		it('should return false if state doesnt have prop', function() {
			const state = new State();

			expect(state.has('foo')).toEqual(false);
		});

		it('should return true if state has prop', function() {
			const state = new State({
				foo: 'bar'
			});

			expect(state.has('foo')).toEqual(true);
		})
	});
});
