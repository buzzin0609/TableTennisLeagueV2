import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';
import HomeScreen from "./home/HomeScreen";

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

it('shows HomeScreen as default', () => {
	const rendered = renderer.create(<App />);
	expect(rendered.root).toBeTruthy();
    expect(rendered.root.findByType(HomeScreen)).toBeTruthy();
});
