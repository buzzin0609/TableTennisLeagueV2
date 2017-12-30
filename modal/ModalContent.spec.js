import React from 'react';
import ModalContent from './ModalContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('ModalContent: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<ModalContent/>).toJSON();
		expect(rendered).toBeTruthy();
	});
});