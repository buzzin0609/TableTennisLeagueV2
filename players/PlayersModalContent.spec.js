import React from 'react';
import PlayersModalContent from './PlayersModalContent';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalContent from "../modal/ModalContent";
import ModalHeader from "../modal/ModalHeader";
import * as utils from "../shared/utils";
import * as state from '../state/State';
import sinon from "sinon";
import StateWrapper from "../state/StateWrapper";

Enzyme.configure({adapter: new Adapter()});

describe('PlayersModalContent: ', function () {
	let stub, stateStub;
	beforeEach(() => {
		stub = sinon.stub(utils, 'getWidth');
		stateStub = sinon.stub(state.default, 'getPartialState');
	});
	afterEach(() => {
		stub.restore();
		stateStub.restore();
	});

	it('renders without crashing', () => {
		const rendered = renderer.create(<PlayersModalContent/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('renders the header with correct title', function() {
		const rendered = renderer.create(<PlayersModalContent title={'Foo Title'}/>);

		expect(rendered.root.findByType(ModalHeader)).toBeTruthy();
		expect(JSON.stringify(rendered.toJSON()).indexOf('Foo Title') >= 0).toEqual(true);
	});

	describe('ModalContent: ', function() {
		it('renders the ModalContent without crashing', function() {
			const rendered = renderer.create(<PlayersModalContent/>);

			expect(rendered.root.findByType(ModalContent)).toBeTruthy();
		});

		it('should render children with players and width passed as props', function() {
			stateStub.returns({
				players: [{foo: 'bar'}, {bar: 'foo'}],
				width: 100
			});

			class Test extends React.Component {
				render() {
					expect(this.props.players).toEqual([{foo: 'bar'}, {bar: 'foo'}]);
					expect(this.props.width).toEqual(100);
					return <p>Foo</p>
				}
			}

			renderer.create(<PlayersModalContent title={'foo'}>
				<Test/>
			</PlayersModalContent>);
		});
	});
});