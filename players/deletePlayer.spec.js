/**
 * Test suite for deletePlayer module
 */

import expect from 'expect';
import deletePlayer from './deletePlayer';
import * as ajax from '../shared/ajax/ajax';
import * as HomeController from '../home/HomeController';
import * as State from '../state/State';
import * as sinon from "sinon";
import constants from "../constants/constants";

describe('deletePlayer:', function () {

	let stubAjax, stubGetPlayers, stubUpdate;

	beforeEach(() => {
		stubAjax = sinon.stub(ajax.default, 'post');
		stubGetPlayers = sinon.stub(HomeController.default, 'getPlayers');
		stubUpdate = sinon.stub(State.default, 'update');
	});

	afterEach(() => {
		stubAjax.restore();
		stubGetPlayers.restore();
		stubUpdate.restore();
	});

	it('should return a callback that sends an ajax post with player name as argument', function() {
		deletePlayer(ajax.default)('Will');

		expect(stubAjax.called).toEqual(true);
		expect(stubAjax.calledWith(constants.AJAX_ROUTES.DELETE_PLAYER, `player=Will`)).toEqual(true);
	});

	it('should not call HomeController.getPlayers if ajax.post rejects', function() {
		expect.assertions(1);
		stubAjax.rejects();
		return deletePlayer(ajax.default, HomeController.default)('Will')
			.then(() => {
				expect(stubGetPlayers.called).toEqual(false);
			});
	});

	it('should not state.update if ajax.post rejects', function() {
		expect.assertions(1);
		stubAjax.rejects();

		return deletePlayer(ajax.default, HomeController.default, State.default)('Will')
			.then(() => {
				expect(stubUpdate.called).toEqual(false);
			});
	});

	it('should call state.update with showModal: true', function() {
		expect.assertions(2);

		return deletePlayer(ajax.default, HomeController.default, State.default)('Will')
			.then(() => {
				expect(stubUpdate.called).toEqual(true);
				expect(stubUpdate.calledWith({
					showModal: false
				})).toEqual(true);
			});
	});

	it('should return a callback that calls HomeController.getPlayers', function () {
		expect.assertions(1);
		return deletePlayer(ajax.default, HomeController.default, State.default)('Will')
			.then(() => {
				expect(stubGetPlayers.called).toEqual(true);
			});

	});


});