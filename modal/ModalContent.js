

import React, { Component } from 'react';
import {Content} from "native-base";

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