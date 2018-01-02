/**
 * Test suite for addPlayer module
 */

import * as _addPlayer from './addPlayer';
import * as Ajax from '../shared/ajax/ajax';
import sinon from 'sinon';
import Player from "./Player";

const addPlayer = _addPlayer.default;

describe('addPlayer:', function () {
	let stub;

	beforeEach(() => {
		stub = sinon.stub(Ajax.default, 'post');
	});

	afterEach(() => {
		stub.restore();
	});

	it('should throw an error if no Player passed as parameter', async function() {
		expect.assertions(1);
		return expect(addPlayer()).rejects.toEqual(new TypeError('Wrong player parameter'));
	});

	it('should throw an error if wrong type passed as player parameter', function() {
		expect.assertions(1);
		return expect(addPlayer('foo')).rejects.toEqual(new TypeError('Wrong player parameter'));
	});

	it('should send ajax request with player parameters', function() {
		expect.assertions(2);
		const player = new Player({name: 'foo'});
		return addPlayer(player)
			.then(() => {
				expect(stub.called).toEqual(true);
				expect(stub.calledWith('/rest/league/players/add', {player})).toEqual(true);
			});
	});

	describe('afterAddPlayerFormSubmit: ', function() {
		let stub1;

		beforeEach(() => {
			stub1 = sinon.stub(_addPlayer, 'default');
		});

		afterEach(() => {
			stub1.restore();
		});

		it('should throw an error if playerName not defined', function() {
			expect.assertions(1);
			return expect(_addPlayer.afterAddPlayerFormSubmit()).rejects.toEqual(new TypeError('playerName string incorrect'));
		});

		it('should call addPlayer with new player instance', function() {
			expect.assertions(1);
			return _addPlayer.afterAddPlayerFormSubmit('Foo')
				.then((player) => {
					expect(player).toEqual(new Player({name: 'Foo'}));
				});
		})
	});
});