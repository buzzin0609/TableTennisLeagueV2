import React, {Component} from 'react';
import ModalHeader from "../modal/ModalHeader";
import ModalContent from "../modal/ModalContent";
import StateWrapper from "../state/StateWrapper";
import AddPlayerForm from "./AddPlayerForm";
import State from "../state/State";
import {getWidth} from "../shared/utils";
import addPlayer, {afterAddPlayerFormSubmit} from "./addPlayer";
import PlayersModalContent from "./PlayersModalContent";

class AddPlayerContent extends Component {

	render() {
		return <PlayersModalContent title={'Add New Player'}>
			<AddPlayerForm afterSubmit={afterAddPlayerFormSubmit}/>
		</PlayersModalContent>
	}
}

export default AddPlayerContent