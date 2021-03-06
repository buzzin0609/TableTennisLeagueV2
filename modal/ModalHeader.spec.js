import React from 'react';
import ModalHeader from './ModalHeader';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('ModalHeader: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<ModalHeader/>).toJSON();
		expect(rendered).toBeTruthy();
	});
});