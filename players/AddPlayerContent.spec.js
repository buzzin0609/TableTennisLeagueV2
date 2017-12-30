import React from 'react';
import AddPlayerContent from './AddPlayerContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from "../layout/Text";
import ModalHeader from "../modal/ModalHeader";

Enzyme.configure({adapter: new Adapter()});

describe('AddPlayerContent: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<AddPlayerContent/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('renders the header with correct title', function() {
		const rendered = renderer.create(<AddPlayerContent/>);

		expect(rendered.root.findByType(ModalHeader)).toBeTruthy();
		expect(JSON.stringify(rendered.toJSON()).indexOf('Add New Player') >= 0).toEqual(true);
	})
});