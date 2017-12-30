/**
 * Test suite for mainMenuComponents module
 */

import expect from 'expect';
import mainMenuComponents from './mainMenuComponents';
import React from "react";

describe('mainMenuComponents:', function () {

	class Test extends React.Component {
		render() {
			return <p>hey</p>
		}
	}

	it('should throw an error if modal not in components list', function() {
		expect(() => mainMenuComponents()('foo')).toThrow();
		expect(() => mainMenuComponents({bar: Test})('foo')).toThrow();
	});

	it('should return a Component from those provided', function() {
		const cb = mainMenuComponents({foo: Test});

		expect(cb('foo') instanceof React.Element).toEqual(true);
	})
});