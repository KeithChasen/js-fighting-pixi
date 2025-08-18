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
		if (e.code === 'ArrowUp') this.state.up = pressed;
		if (e.code === 'KeyS') {
			if (pressed) {
				if (!this.state.s) {
					this.pressed.s = true;
				}
			}
			this.state.s = pressed;
		}

		if (e.code === 'KeyD') {
			if (pressed) {
				if (!this.state.d) {
					this.pressed.d = true;
				}
			}
			this.state.d = pressed;
		}
	}

	update() {
		//drop pressed
		this.pressed = {};
	}
}
