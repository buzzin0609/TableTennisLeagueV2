import React, { Component } from 'react';
import State from "./State";

type Props = {
	stateProps: string,
	state?: Object
};

class StateWrapper extends Component<Props> {

  render() {

  	if (!this.props.children) {
  		throw new Error('No child component present');
	}

	const state = this.props.state || State;

	const props = this.props.stateProps ? state.getPartialState(this.props.stateProps) : state.get();

	return React.cloneElement(this.props.children, props);
  }

}

export default StateWrapper