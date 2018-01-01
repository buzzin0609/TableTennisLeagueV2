
import React, { Component } from 'react';
import { View } from 'react-native';
import ModalHeader from "../modal/ModalHeader";
import ModalContent from "../modal/ModalContent";

class AddPlayerContent extends Component {
  render() {
    return [
    	<ModalHeader title={`Add New Player`} key={`add-player-header`} />,
		<ModalContent>
			
		</ModalContent>
	]
  }
}

export default AddPlayerContent