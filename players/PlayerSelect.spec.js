import React from 'react';
import PlayerSelect from './PlayerSelect';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPlayers from "../__mocks__/mockPlayers";
import {Picker} from "native-base";
import Player from "./Player";

Enzyme.configure({adapter: new Adapter()});

describe('PlayerSelect: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<PlayerSelect/>).toJSON();
		expect(rendered).toBeTruthy();
	});
});