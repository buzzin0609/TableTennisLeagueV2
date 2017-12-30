/**
 * Created by Will Busby on 23/12/2017.
 * Description:
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import Text from "../layout/Text";
import {Col, Grid} from "react-native-easy-grid";
import type {HeadingModel} from "./HeadingType";
import headingStyles from "./headingStyles";
import {Icon} from "native-base";


class Heading extends Component<HeadingModel> {
  state = {};

  render() {
    return (
		<Col size={this.props.size} style={headingStyles}>
			<Text>{this.props.name}</Text><Icon style={{fontSize: 20, paddingLeft: 5}} name={`md-arrow-dropdown`} />
		</Col>
    )
  }
}

export default Heading