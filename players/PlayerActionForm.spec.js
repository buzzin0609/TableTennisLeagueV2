import React from 'react';
import PlayerActionForm from './PlayerActionForm';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as sinon from "sinon";
import {Button} from "native-base";

Enzyme.configure({adapter: new Adapter()});

describe('PlayerActionForm: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<PlayerActionForm/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	function textTest(props, text) {
		const rendered = renderer.create(<PlayerActionForm {...props}/>).toJSON();
		expect(JSON.stringify(rendered)).toEqual(expect.stringContaining(text));
	}

	it('should render a button with prop buttonText', function() {
		const text = 'Test Button Text';
		const props = {
			buttonText: text
		};

		textTest(props, text);
	});

	it('should trigger onPress prop function when button pressed', function() {
		const onPressSpy = sinon.spy();
		const rendered = shallow(<PlayerActionForm buttonText={'foo'} onPress={onPressSpy} />);

		rendered.find(Button).simulate('press');

		expect(onPressSpy.called).toEqual(true);
	});
});