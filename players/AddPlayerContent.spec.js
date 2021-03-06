import React from 'react';
import AddPlayerContent from './AddPlayerContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from "../layout/Text";
import ModalHeader from "../modal/ModalHeader";
import ModalContent from "../modal/ModalContent";
import * as utils from "../shared/utils";
import sinon from "sinon";

Enzyme.configure({adapter: new Adapter()});

describe('AddPlayerContent: ', function () {
	let stub;
	beforeEach(() => {
		stub = sinon.stub(utils, 'getWidth');
	});
	afterEach(() => {
		stub.restore();
	});

	it('renders without crashing', () => {
		const rendered = renderer.create(<AddPlayerContent/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('renders the header with correct title', function() {
		const rendered = renderer.create(<AddPlayerContent/>);

		expect(rendered.root.findByType(ModalHeader)).toBeTruthy();
		expect(JSON.stringify(rendered.toJSON()).indexOf('Add New Player') >= 0).toEqual(true);
	});

	describe('ModalContent: ', function() {
		it('renders the ModalContent without crashing', function() {
			const rendered = renderer.create(<AddPlayerContent/>);

			expect(rendered.root.findByType(ModalContent)).toBeTruthy();
		});
	});
});