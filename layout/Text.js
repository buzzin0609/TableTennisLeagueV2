/**
 * Description: default app Text component with app text styles
 */

import React, { Component } from 'react';
import {Text} from 'react-native';
import textStyles from "./textStyles";

class AppText extends Component {
  render() {
    return (
        <Text {...this.props} style={{...textStyles, ...this.props.style}}>{this.props.children}</Text>
    )
  }
}

export default AppText
