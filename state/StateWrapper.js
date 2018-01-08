import React, {Component} from 'react';
import State from "./State";
import {Text} from "react-native";
import ensureArray from "../shared/ensureArray";

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

		const props = this.props.stateProps && state.getPartialState(this.props.stateProps) || state.get() || {};

		return ensureArray(this.props.children).reduce(
			(acc, child, i) => {
				if (child) {
					props.key = Symbol(i).toString();
					acc.push(React.cloneElement(child, props));
				}

				return acc;
			}, []
		);

	}

}

export default StateWrapper