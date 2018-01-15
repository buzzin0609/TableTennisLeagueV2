/**
 * Test suite for ModalController module
 */

import expect from 'expect';
import * as AddNewGameController from './AddNewGameController';
import * as ajax from '../shared/ajax/ajax';
import * as sinon from "sinon";
import constants from "../constants/constants";
import * as HomeController from '../home/HomeController';
import * as State from '../state/State';
import Player from "../players/Player";
import {GamePlayer} from "../players/GamePlayer";

describe('AddNewGameController:', function () {
	function getPlayer(name, points) {
		return new GamePlayer({
			player: new Player({ name }),
			points
		})
	}

	describe('.isValid: ', function() {

		function testValid(args, expected) {
			expect(AddNewGameController.default.isValid(args)).toEqual(expected);
		}

		it('should return false when both names are the same', function() {
			const args = {
				player1: getPlayer('Will', 11),
				player2: getPlayer('Will', 4)
			};

			testValid(args, false);
		});

		it('should return false if pointss are the same', function() {
			const args = {
				player1: getPlayer('Will', 11),
				player2: getPlayer('Bill', 11)
			};

			testValid(args, false);
		});

		it('should return false if any value is undefined', function() {
			function getUndefined(prop) {
				const args = {
					player1: getPlayer('Will', 11),
					player2: getPlayer('Bill', 4)
				};
				args[prop] = undefined;
				return args;
			}

			testValid(getUndefined('player1'), false);
			testValid(getUndefined('player2'), false);
		});

		it('should return false if points arent 2 points apart', function() {
			const args = {
				player1: getPlayer('Will', 11),
				player2: getPlayer('Bill', 10)
			};

			testValid(args, false);
		});

		it('should return true when a valid game', function() {
			const args = {
				player1: getPlayer('Will', 11),
				player2: getPlayer('Bill', 9)
			};

			testValid(args, true);
		});
	});

	describe('.addNewGame: ', function() {
		let ajaxStub, getPlayersStub, updateStub;
		const validArgs = {
			player1: getPlayer('Will', 11),
			player2: getPlayer('Bill', 9)
		};

		const invalidArgs =  {
			player1: getPlayer('Will', 11),
			player2: getPlayer('Bill', 10)
		};

		beforeEach(() => {
			ajaxStub = sinon.stub(ajax.default, 'post');
			getPlayersStub = sinon.stub(HomeController.default, 'getPlayers');
			updateStub = sinon.stub(State.default, 'update');
		});

		afterEach(() => {
			ajaxStub.restore();
			getPlayersStub.restore();
			updateStub.restore();
		});

		it('should fire ajax.post when game is valid', function() {
			AddNewGameController.default.addNewGame(validArgs);

			expect(ajaxStub.called).toEqual(true);
			expect(ajaxStub.args[0]).toEqual([
				constants.AJAX_ROUTES.ADD_NEW_GAME,
				'game=' + JSON.stringify(validArgs)
			]);
		});

		it('should fire HomeController.getPlayers after ajax.post', async function() {
			expect.assertions(1);
			await AddNewGameController.default.addNewGame(validArgs);

			expect(getPlayersStub.called).toEqual(true);
		});

		it('should not fire ajax.post when game isnt valid', function() {
			AddNewGameController.default.addNewGame(invalidArgs);

			expect(ajaxStub.called).toEqual(false);
		});

		it('should not fire HomeController.getPlayers when game isnt valid', async function() {
			expect.assertions(1);
			await AddNewGameController.default.addNewGame(invalidArgs);

			expect(getPlayersStub.called).toEqual(false);
		});

		it('should return false if not valid game', async function() {
			expect.assertions(1);
			expect(await AddNewGameController.default.addNewGame(invalidArgs)).toEqual(false);
		});

		it('should return false if error with Ajax.post', async function() {
			expect.assertions(1);
			ajaxStub.rejects();

			expect(await AddNewGameController.default.addNewGame(validArgs)).toEqual(false);
		});

		it('should return true if valid game and function completes', async function() {
			expect.assertions(1);

			expect(await AddNewGameController.default.addNewGame(validArgs)).toEqual(true);
		});

		it('should update state with showModal: false after successfully added game', async function() {
			expect.assertions(2);
			await AddNewGameController.default.addNewGame(validArgs);

			expect(updateStub.called).toEqual(true);
			expect(updateStub.calledWith({ showModal: false })).toEqual(true);
		});
	});
});