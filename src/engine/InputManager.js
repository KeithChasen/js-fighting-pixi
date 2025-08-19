export class InputManager {
	state = {
		up: false,
		down: false,
		left: false,
		right: false,
		s: false,
		d: false,
	};
	pressed = {};

	constructor() {
		window.addEventListener('keydown', e => this.onKey(e, true));
		window.addEventListener('keyup', e => this.onKey(e, false));
	}

	onKey(e, pressed) {
		if (e.code === 'ArrowLeft') this.state.left = pressed;
		if (e.code === 'ArrowRight') this.state.right = pressed;
		if (e.code === 'ArrowDown') this.state.down = pressed;

		this.processOneTimePress(e, 'ArrowUp', 'up', pressed); // jump
		this.processOneTimePress(e, 'KeyS', 's', pressed); // punch
		this.processOneTimePress(e, 'KeyD', 'd', pressed); // kick
	}

	/**
	 *
	 * @param {*} e : Event
	 * @param {*} key : KeyS, KeyD
	 * @param {*} state : s, d
	 * @param {*} pressed : bool
	 */
	processOneTimePress(e, key, state, pressed) {
		if (e.code === key) {
			if (pressed) {
				if (!this.state[state]) {
					this.pressed[state] = true;
				}
			}
			this.state[state] = pressed;
		}
	}

	update() {
		//drop pressed
		this.pressed = {};
	}
}
