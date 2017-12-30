import React from 'react';
import MainModal from './MainModal';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Text from "../layout/Text";

Enzyme.configure({adapter: new Adapter()});

describe('MainModal: ', function () {
	it('renders without crashing', () => {
		const rendered = renderer.create(<MainModal/>).toJSON();
		expect(rendered).toBeTruthy();
	});

	it('should render the content prop', function() {
		class TestModalContent extends React.Component {
			render() {
				return <Text>Hello</Text>
			}
		}

		function renderTest() {
			return <TestModalContent />
		}

		const rendered = renderer.create(<MainModal content={renderTest} />);

		expect(rendered.root.findByType(TestModalContent)).toBeTruthy();
		expect(rendered.root.findByType(Text)).toBeTruthy();
	});
});
