import React from 'react';
import AddNewGameContent from './AddNewGameContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPlayers from "../__mocks__/mockPlayers";
import * as sinon from "sinon";
import * as utils from '../shared/utils';
import * as HomeController from "../home/HomeController";
import * as State from "../state/State";
import * as ajax from "../shared/ajax/ajax";
import PlayerSelect from "../players/PlayerSelect";
import {Input} from "native-base";

Enzyme.configure({adapter: new Adapter()});

describe('AddNewGameContent: ', function () {
	let utilStub;
	let stubAjax, stubGetPlayers, updateStub;
	beforeEach(() => {
		utilStub = sinon.stub(utils, 'getWidth');
		stubAjax = sinon.stub(ajax.default, 'post');
		stubGetPlayers = sinon.stub(HomeController.default, 'getPlayers');
		stubUpdate = sinon.stub(State.default, 'update');
	});

	afterEach(() => {
		utilStub.restore();
		stubAjax.restore();
		stubGetPlayers.restore();
		stubUpdate.restore();
	});

	it('renders without crashing', () => {
		const rendered = renderer.create(<AddNewGameContent players={mockPlayers} />).toJSON();
		expect(rendered).toBeTruthy();
	});

	describe('.renderPlayerSelect: ', function() {
		it('should return a PlayerSelect with the correct placeholder', function () {
			const rendered = renderer.create(<AddNewGameContent players={mockPlayers} />);
			const selectPlayer = rendered.root.instance.renderPlayerSelect('Foo placeholder');

			expect(selectPlayer).toBeTruthy();
			expect(selectPlayer.props.placeholder).toEqual('Foo placeholder');
		});
	});

	describe('.renderPlayerScoreInput: ', function() {
		it('should return an Item', function() {
			const rendered = renderer.create(<AddNewGameContent players={mockPlayers} />);
			const input = rendered.root.instance.renderPlayerScoreInput(() => {});

			expect(input).toBeTruthy();
		});

		it('should return Item with input child and dynamically set value', function() {
			const rendered = renderer.create(<AddNewGameContent players={mockPlayers} />);
			const view = shallow(rendered.root.instance.renderPlayerScoreInput(() => {}, 'foo'));
			const input = view.find(Input);
			expect(input).toBeTruthy();
			expect(input.props().value).toEqual('foo');
		});

	});
});
