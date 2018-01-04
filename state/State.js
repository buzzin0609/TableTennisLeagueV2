// @flow
/**
 * Description: Global Component state object
 */
import deepClone from "../shared/deepClone";

export class State {
	state: Object;
	subscribers: Array<Function>;

	constructor(initialState?: Object) {
		this.state = initialState ? deepClone(initialState) : {};
		this.subscribers = [];
	}

	get(): Object {
		return deepClone(this.state);
	}

	getPartialState(propsToGet: string | Array<string>) {
		return this.ensurePropsArray(propsToGet)
			.reduce((acc: Object, key: string) => {
				acc[key] = this.state[key];
				return acc;
			}, {});
	}

	add(partialState: Object): void {
		this.state = Object.keys(partialState)
			.reduce((acc: Object, key: string): Object => {

				if (acc[key]) {
					throw new Error(`Prop ${key} already present in global state. Cannot overwrite a state prop using .add - use .update instead.`);
				}

				acc[key] = partialState[key];
				return acc;
			}, this.state);
	}

	update(partialState: Object): void {
		this.state = {
			...this.state,
			...partialState
		};

		const newState = this.get();

		this.subscribers.forEach(callback => callback.call(callback, newState));
	}

	subscribe(callback: Function): void {
		this.subscribers.push(callback);
	}

	ensurePropsArray(props: any) : Array<string> {
		if (!props || (!Array.isArray(props) && typeof props !== 'string')) {
			throw new TypeError('Wrong props variable type. Can be either a string or array');
		}

		const isArray: boolean = Array.isArray(props);

		if (isArray) return props;

		if (/[^,]\s+[^,]/.test(props)) {
			throw new SyntaxError('String parameter must be comma separated, spaces or other special characters not allows');
		}

		return props.split(/[\s+]?,[\s+]?/);
	}

	has(prop: string): boolean {
		return this.state.hasOwnProperty(prop);
	}
}

let singleton: State = new exports.State();

export default singleton;