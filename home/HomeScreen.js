import React, { Component } from 'react';
import {View} from 'react-native';
import BaseViewLayout from "../layout/BaseViewLayout";
import Text from "../layout/Text";
import LeagueTable from "../leagueTable/LeagueTable";
import State from "../state/State";
import {Button} from "native-base";
import PlayerType from "../players/Player";
import HomeController from './HomeController';
import MainModal from "../modal/MainModal";
import mainMenuComponents, {componentsObject} from "../menu/mainMenu/mainMenuComponents";


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

			{this.state.showModal && (
				<MainModal content={() => mainMenuComponents(componentsObject())(this.state.modalView)}/>
			)}
		</BaseViewLayout>
    )
  }
}

export default HomeScreen;