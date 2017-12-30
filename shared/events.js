/**
 * Description: basic event manager
 */

import {EventEmitter} from 'fbemitter';

let emitter : EventEmitter = void 0;

export default function() : EventEmitter {
	if (!emitter) {
		emitter = new EventEmitter();
	}

	return emitter;
}