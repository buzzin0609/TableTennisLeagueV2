import React from 'react';
import DeletePlayerContent from './DeletePlayerContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as state from "../state/State";
import * as utils from "../shared/utils";
import sinon from "sinon";
import Player from "./Player";

Enzyme.configure({adapter: new Adapter()});

describe('DeletePlayerContent: ', function () {

	let stub, stateStub;
	beforeEach(() => {
		stub = sinon.stub(utils, 'getWidth');
		stateStub = sinon.stub(state.default, 'getPartialState');
	});
	afterEach(() => {
		stub.restore();
		stateStub.restore();
	});

	it('renders without crashing', () => {
		const rendered = renderer.create(<DeletePlayerContent/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('renders ModalHeader with Delete Player title', function() {
		const rendered = JSON.stringify(renderer.create(<DeletePlayerContent/>).toJSON());
		expect(rendered).toEqual(expect.stringContaining('Delete Player'));
	});

	it('renders with PlayerSelect item', function () {
		const players = [new Player({name: 'Will'})];
		stateStub.returns({
			players
		});

		const rendered = renderer.create(<DeletePlayerContent />);
		expect(rendered.root.findByProps({players})).toBeTruthy();
	});
});