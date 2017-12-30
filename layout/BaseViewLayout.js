/**
 * Description: Base view layout for all main views
 */

import React, { Component } from 'react';
import {Text} from 'react-native';
import { Font } from 'expo';
import baseViewLayoutStyles from "./baseViewLayoutStyles";
import {Body, Button, Container, Content, Footer, Header, Icon, Left, Right, Title} from "native-base";


class BaseViewLayout extends Component {
  static propTypes = {}
  state = {
  	fontLoaded: false
  };

  async componentDidMount() {
  	await Font.loadAsync({
		'roboto-regular': require('../assets/fonts/roboto/Roboto-Regular.ttf')
	});
  	this.setState({ fontLoaded: true });
  }

  render() {

  	if (!this.state.fontLoaded) {
  		return <Text />;
	}

    return (
		<Container style={baseViewLayoutStyles.container}>
			<Content padder>
				{this.props.children}
			</Content>
		</Container>
    )
  }
}

export default BaseViewLayout
