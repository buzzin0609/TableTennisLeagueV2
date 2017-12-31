// @flow

import type {Element} from 'react';
import React from "react";
import AddPlayerContent from "../../players/AddPlayerContent";


export function componentsObject(): Object {
	return {
		addPlayer: AddPlayerContent
	};
}


export default function mainMenuComponents(components: Object): Function {
	return function getComponent(name: string): Element<*> {
		if (!components.hasOwnProperty(name)) {
			throw new Error(`Component ${name} not found`);
		}

		const ModalComponent = components[name];

		return <ModalComponent />;
	}
}
