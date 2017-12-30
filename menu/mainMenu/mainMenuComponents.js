// @flow

import type {Element} from 'react';
import React from "react";

export default function mainMenuComponents(components: Object): Function {
	return function getComponent(name: string): Element<*> {
		if (!components.hasOwnProperty(name)) {
			throw new Error('Component not found');
		}

		const ModalComponent = components[name];

		return <ModalComponent />;
	}
}
