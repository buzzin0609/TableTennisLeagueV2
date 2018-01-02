

import React, { Component } from 'react';
import {Content} from "native-base";
import Dimensions from "react-native/Libraries/Utilities/Dimensions";

class ModalContent extends Component {
  render() {
    return (
		<Content>
			{this.props.children}
		</Content>
    )
  }
}

export default ModalContent