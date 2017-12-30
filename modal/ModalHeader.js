
import React, { Component } from 'react';
import { View } from 'react-native';
import {Body, Header} from "native-base";
import Text from "../layout/Text";

type Props = {
	title: string
}

class ModalHeader extends Component<Props> {
  render() {
    return (
		<Header>
			<Body>
				<Text>{this.props.title}</Text>
			</Body>
		</Header>
    )
  }
}

export default ModalHeader