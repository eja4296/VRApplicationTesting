export class Prop {
	constructor(name, initVal = null, redigest = true, onChange = newVal => {}) {
		this.name = name;
		this.initVal = initVal;
		this.redigest = redigest;
		this.onChange = onChange;
	}
}

export function createComponent(config = {}) {
	const props = config.props || [];
	const initFn = config.init || (() => {});
	const updateFn = config.update || (() => {});

	return function() {

		// Holds component state
		let state = {
			initialised: false
		};

		// Component constructor
		function comp(nodeElement) {
			initStatic(nodeElement);
			digest();

			return comp;
		}

		// Getter/setter methods
		props.forEach(prop => {
			comp[prop.name] = getSetProp(prop.name, prop.redigest, prop.onChange);
			state[prop.name] = prop.initVal;
			prop.onChange(prop.initVal);

			function getSetProp(prop, redigest = false,  onChange = newVal => {}) {
				return _ => {
					if (!arguments.length) { return state[prop] }
					state[prop] = _;
					onChange(_);
					if (redigest) { digest(); }
					return comp;
				}
			}
		});

		// Reset all component props to their default value
		comp.resetProps = function() {
			props.forEach(prop => {
				state[prop.name] = prop.initVal;
				prop.onChange(prop.initVal);
			});
			digest();	// Re-digest after resetting props

			return comp;
		};

		//

		function initStatic(nodeElement) {
			initFn(nodeElement, state);
			state.initialised = true;
		}

		function digest() {
			if (!state.initialised) { return; }
			updateFn(state);
		}

		return comp;
	}
}
