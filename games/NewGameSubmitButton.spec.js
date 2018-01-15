import React from 'react';
import NewGameSubmitButton from './NewGameSubmitButton';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('NewGameSubmitButton: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<NewGameSubmitButton/>).toJSON();
		expect(rendered).toBeTruthy();
	});
});