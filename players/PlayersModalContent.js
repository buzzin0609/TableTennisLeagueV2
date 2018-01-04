import React, {Component} from 'react';
import {View} from 'react-native';
import {getWidth} from "../shared/utils";
import State from "../state/State";
import ModalHeader from "../modal/ModalHeader";
import ModalContent from "../modal/ModalContent";
import StateWrapper from "../state/StateWrapper";

type Props = {
	title: string
}

class PlayersModalContent extends Component<Props> {
	componentDidMount() {
		State.update({width: getWidth()});
	}

	render() {
		return [
			<ModalHeader title={this.props.title} key={`players-header`}/>,
			<ModalContent key={'players'}>
				{
					this.props.children && (
						<StateWrapper stateProps={'players, width'}>
							{this.props.children}
						</StateWrapper>
					)
				}
			</ModalContent>
		];
	}
}

export default PlayersModalContent