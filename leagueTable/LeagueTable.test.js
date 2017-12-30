import React from 'react';
import LeagueTable from './LeagueTable';

import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LeagueTableHeader from "./LeagueTableHeader";
import PlayerCell from "../players/PlayerCell";
import type {PlayerModel} from "../players/Player";
import PlayerType from "../players/Player";

Enzyme.configure({adapter: new Adapter()});

it('renders without crashing', () => {
	const rendered = renderer.create(<LeagueTable/>).toJSON();
	expect(rendered).toMatchSnapshot();
});

it('should render player cells when players passed to LeagueTable', function () {
	const model: PlayerModel = {
		name: 'Foo',
		wins: 5,
		losses: 0,
		rankPoints: 0,
		gamesPlayed: 5
	};
	const player: PlayerType = new PlayerType(model)
	const view = shallow(<LeagueTable />);

	expect(view).toMatchSnapshot();

	view.setProps({
		players: [player]
	});

	expect(view).toMatchSnapshot();
});