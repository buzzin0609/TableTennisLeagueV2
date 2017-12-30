
import React, { Component } from 'react';
import { View } from 'react-native';
import ModalHeader from "../modal/ModalHeader";

class AddPlayerContent extends Component {
  render() {
    return [
    	<ModalHeader title={`Add New Player`} key={`add-player-header`} />
	]
  }
}

export default AddPlayerContent