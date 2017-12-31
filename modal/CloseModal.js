// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import {Button} from "native-base";
import typeof State from "../state/State";
import Text from "../layout/Text";

type Props = {
	globalState: State
};

class CloseModal extends Component<Props> {

  render() {
    return (
        <Button transparent onPress={() => this.props.globalState.update({ showModal: false })} title={'Close'} >
			<Text>Close</Text>
		</Button>
    )
  }
}

export default CloseModal