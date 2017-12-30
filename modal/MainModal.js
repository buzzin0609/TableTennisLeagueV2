
import React, { Component } from 'react';
import {Modal, View} from 'react-native';
import {Container, Content} from "native-base";

type Props = {
  content: Function
};

class MainModal extends Component<Props> {
  static defaultProps = {
    content: () => {}
  };

  render() {
    return (
        <Modal
			animationType={"slide"}
			transparent={false}
        >
          <Container>
            {this.props.content()}
          </Container>
        </Modal>
    )
  }
}

export default MainModal