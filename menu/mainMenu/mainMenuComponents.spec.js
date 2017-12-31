/**
 * Test suite for mainMenuComponents module
 */

import expect from 'expect';
import mainMenuComponents from './mainMenuComponents';
import React from "react";

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('mainMenuComponents:', function () {

	class Test extends React.Component {
		render() {
			return <p className={'foo'}>hey</p>
		}
	}

	it('should throw an error if modal not in components list', function() {
		expect(() => mainMenuComponents()('foo')).toThrow();
		expect(() => mainMenuComponents({bar: Test})('foo')).toThrow();
	});

	it('should return a Component from those provided', function() {
		const cb = mainMenuComponents({foo: Test});

		expect(shallow(cb('foo')).find('.foo')).toBeTruthy();
	})
});
