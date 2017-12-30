
import React from 'react';
import BaseViewLayout from './BaseViewLayout';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import AppText from "./Text";
import {Text} from "react-native";
import App from "../App";

it('renders without crashing', () => {
  const rendered = renderer.create(<BaseViewLayout />).toJSON();
  expect(rendered).toBeTruthy();
});

it('should only render text if font not loaded', function () {
	const rendered = renderer.create(<BaseViewLayout>
		<AppText className={`test`}>Hello</AppText>
	</BaseViewLayout>);

	expect(rendered.root.findByType(Text)).toBeTruthy();
	expect(() => rendered.root.findByType(AppText)).toThrow();
});

it('should render children passed in when font loaded', function () {
	const rendered = shallow(<BaseViewLayout>
		<AppText className={`test`}>Hello</AppText>
	</BaseViewLayout>);
	rendered.setState({
		fontLoaded: true
	});
	expect(rendered.find(AppText)).toBeTruthy();
});