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
});
