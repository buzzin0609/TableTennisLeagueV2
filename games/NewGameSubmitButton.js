// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import playerFormStyles from "../players/playerFormStyles";
import {Button} from "native-base";
import Text from "../layout/Text";
import Player from "../players/Player";

type Props = {
	players?: Array<Player>,
	onPress: Function
};

class NewGameSubmitButton extends Component<Props> {

  render() {
    return (
		<Button onPress={() => this.props.onPress(this.props.players)} title={'submit new game'} full style={playerFormStyles.button}>
			<Text style={playerFormStyles.buttonText}>Submit</Text>
		</Button>
    )
  }
}

export default NewGameSubmitButton