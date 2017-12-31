import React from 'react';
import CloseModal from './CloseModal';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {State} from "../state/State";

Enzyme.configure({adapter: new Adapter()});

describe('CloseModal: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<CloseModal/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('should update state showModal prop to false when pressed', function() {
		const state = new State({
			showModal: true
		});

		const rendered = shallow(<CloseModal globalState={state} />);
		rendered.simulate('click');

		expect(state.getPartialState('showModal')).toEqual({
			showModal: false
		});
	})
});
