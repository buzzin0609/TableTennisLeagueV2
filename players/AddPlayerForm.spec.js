import React from 'react';
import AddPlayerForm from './AddPlayerForm';

import renderer from 'react-test-renderer';
import Enzyme, {shallow, render} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockPlayers from "../__mocks__/mockPlayers";
import {Button, Input, Item} from "native-base";

Enzyme.configure({adapter: new Adapter()});

describe('AddPlayerForm: ', function () {

	function invalidateAssertion(rendered) {
		rendered.instance().onSubmit();
		expect(rendered.state().isValid).toEqual(false);
		expect(rendered.state().isClean).toEqual(false);
	}

	function validatedAssertion(rendered) {
		rendered.instance().onSubmit();
		expect(rendered.state().isValid).toEqual(true);
		expect(rendered.state().isClean).toEqual(false);
	}

	function afterSubmitAssertion(name, calls) {
		const cb = jest.fn();
		const rendered = shallow(<AddPlayerForm players={mockPlayers} afterSubmit={cb}/>);
		rendered.setState({
			value: name
		});

		rendered.instance().onSubmit();

		expect(cb.mock.calls.length).toEqual(calls);

		return cb;
	}

	it('renders without crashing', () => {
		const rendered = renderer.create(<AddPlayerForm/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('should invalidate if nothing entered', function() {
		const rendered = shallow(<AddPlayerForm players={mockPlayers}/>);
		invalidateAssertion(rendered);
	});

	it('should invalidate if value entered is same as another player', function() {
		const rendered = shallow(<AddPlayerForm players={mockPlayers}/>);
		rendered.setState({
			value: 'Will'
		});

		invalidateAssertion(rendered);
	});

	it('should validate if value entered is not same as another player', function() {
		const rendered = shallow(<AddPlayerForm players={mockPlayers}/>);
		rendered.setState({
			value: 'Foo'
		});

		validatedAssertion(rendered);
	});

	it('should not trigger afterSubmit callback if not valid name', function() {
		afterSubmitAssertion('Will', 0);
	});

	it('should not trigger afterSubmit callback if empty name', function() {
		afterSubmitAssertion('', 0);
	});

	it('should trigger afterSubmit callback if valid name', function() {
		const cb = afterSubmitAssertion('Foo', 1);
		expect(cb.mock.calls[0]).toEqual(['Foo']);
	});

	describe('buttonText: ', function() {
		function buttonTextTest(value, expected) {
			const rendered = shallow(<AddPlayerForm players={mockPlayers}/>);
			rendered.setState({
				value
			});
			rendered.instance().onSubmit();

			expect(rendered.state().buttonText).toEqual(expected);
		}

		it('should change button text when button clicked and name is valid', function() {
			buttonTextTest('Foo', 'Adding');
		});

		it('should keep submit text if name not valid', function() {
			buttonTextTest('Will', 'Submit');
		});
	});


});