import React, {Component} from 'react';
import {View} from 'react-native';
import ModalHeader from "../modal/ModalHeader";
import ModalContent from "../modal/ModalContent";
import StateWrapper from "../state/StateWrapper";
import AddPlayerForm from "./AddPlayerForm";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";
import State from "../state/State";
import {getWidth} from "../shared/utils";
import addPlayer, {afterAddPlayerFormSubmit} from "./addPlayer";

class AddPlayerContent extends Component {
	render() {

		State.update({width: getWidth()});

		return [
			<ModalHeader title={`Add New Player`} key={`add-player-header`}/>,
			<ModalContent key={'add-player-content'}>
				<StateWrapper stateProps={'players, width'}>
					<AddPlayerForm afterSubmit={afterAddPlayerFormSubmit}/>
				</StateWrapper>
			</ModalContent>

		]
	}
}

export default AddPlayerContent