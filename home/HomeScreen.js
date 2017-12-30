import React, { Component } from 'react';
import {View} from 'react-native';
import BaseViewLayout from "../layout/BaseViewLayout";
import Text from "../layout/Text";
import LeagueTable from "../leagueTable/LeagueTable";
import State from "../state/State";
import {Button} from "native-base";
import PlayerType from "../players/Player";
import HomeController from './HomeController';


class HomeScreen extends Component {
  state = State.get();

  componentDidMount() {
  	State.subscribe(newState => {
  		this.setState(newState);
	});

  	HomeController.getPlayers.call(HomeController);
  }

  render() {
    return (
        <BaseViewLayout>
			<LeagueTable />
		</BaseViewLayout>
    )
  }

  onPress() {
  	const {players} = State.get();

  	players[0].wins++;

  	State.update({
		players
	});
  }
}

export default HomeScreen;