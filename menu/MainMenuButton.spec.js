import React from 'react';
import MenuButton from './MainMenuButton';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('MenuButton: ', function menuButtonTests() {

	it('renders without crashing', () => {
		const rendered = renderer.create(<MenuButton/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('should fire toggle menu function on press', function () {
		const toggleMenu = jest.fn();
		const rendered = shallow(<MenuButton toggleMenu={toggleMenu} navigate={jest.fn()}/>);
		rendered.simulate('press');

		expect(toggleMenu.mock.calls.length).toBe(1);
	});
});