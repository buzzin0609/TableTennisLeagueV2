/**
 * Test suite for addPlayer module
 */

import * as _addPlayer from './addPlayer';
import * as Ajax from '../shared/ajax/ajax';
import sinon from 'sinon';
import Player from "./Player";
import * as st from "../state/State";
import * as hc from '../home/HomeController';

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
				expect(stub.calledWith('rest/league/players/add', 'player=' + JSON.stringify(player))).toEqual(true);
			});
	});

	describe('afterAddPlayerFormSubmit: ', function() {
		let stub1, stub2, stub3;

		beforeEach(() => {
			stub1 = sinon.stub(_addPlayer, 'default');
			stub2 = sinon.stub(st.default, 'update');
			stub3 = sinon.stub(hc.default, 'getPlayers');
		});

		afterEach(() => {
			stub1.restore();
			stub2.restore();
			stub3.restore();
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
		});

		it('should update State showModal to false when successfully added', function() {
			expect.assertions(2);
			return _addPlayer.afterAddPlayerFormSubmit('Foo')
				.then(() => {
					expect(stub2.called).toEqual(true);
					expect(stub2.calledWith({ showModal: false })).toEqual(true);
				});
		});

		it('should not update State showModal if error in addPlayer', function() {
			stub1.rejects();
			expect.assertions(1);
			return _addPlayer.afterAddPlayerFormSubmit('Error')
				.then(() => {
					expect(stub2.called).toEqual(false);
				});
		});

		it('should call HomeController.getPlayers if ajax was successful', function() {
			expect.assertions(1);
			return _addPlayer.afterAddPlayerFormSubmit('home')
				.then(() => {
					expect(stub3.called).toEqual(true);
				})
		});
	});
});