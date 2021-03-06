import React from 'react';
import StateWrapper from './StateWrapper';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from "../layout/Text";
import {State} from "./State";

Enzyme.configure({adapter: new Adapter()});

describe('StateWrapper: ', function testStateWrapper() {
	const state = new State({
		foo: 'bar'
	});

	it('renders without crashing', () => {
		const rendered = renderer.create(
			<StateWrapper>
				<Text>hey</Text>
			</StateWrapper>
		).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('should map the specified stateProps of props state to the child', function () {

		class Test extends React.Component {
			render() {
				return (
					<Text>{this.props.foo}</Text>
				)
			}
		}

		const view = renderer.create(
			<StateWrapper stateProps={'foo'} state={state}>
				<Test />
			</StateWrapper>
		);

		expect(view.toJSON().children).toEqual(['bar']);
	});

	it('should render with specified props and state props', function () {

		class Test extends React.Component {
			render() {
				return (
					<Text>
						{this.props.foo + this.props.bar}
					</Text>
				)
			}
		}

		const rendered = shallow(
			<StateWrapper stateProps={'foo'} state={state}>
				<Test bar={'foo'} />
			</StateWrapper>
		);

		const test = rendered.find(Test);

		expect(test).toBeTruthy();
	});

	it('should render multiple components', function() {
		class Test extends React.Component {
			render() {
				return (
					<Text>
						{this.props.foo + this.props.bar}
					</Text>
				)
			}
		}

		const rendered = renderer.create(
			<StateWrapper stateProps={'foo'} state={state}>
				<Test bar={'foo'} />
				<Test bar={'foo'} />
			</StateWrapper>
		).toJSON();

		expect(rendered).toBeTruthy();
	})
});