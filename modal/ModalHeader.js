
import React, { Component } from 'react';
import {Body, Header, Left, Right, Title} from "native-base";
import CloseModal from "./CloseModal";
import State from "../state/State";

type Props = {
	title: string
}

class ModalHeader extends Component<Props> {
  render() {
    return (
		<Header>
			<Body>
				<Title>{this.props.title}</Title>
			</Body>
			<Right>
				<CloseModal globalState={State} />
			</Right>
		</Header>
    )
  }
}

export default ModalHeader