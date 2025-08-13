export class InputManager {
	state = {
		up: false,
		down: false,
		left: false,
		right: false,
		punch: false,
	};

	constructor() {
		window.addEventListener('keydown', e => this.onKey(e, true));
		window.addEventListener('keyup', e => this.onKey(e, false));
	}

	onKey(e, pressed) {
		if (e.code === 'ArrowLeft') this.state.left = pressed;
		if (e.code === 'ArrowRight') this.state.right = pressed;
		if (e.code === 'ArrowDown') this.state.down = pressed;
		if (e.code === 'ArrowUp') this.state.top = pressed;
		if (e.code === 'KeyD') this.state.punch = pressed;
	}

	update() {
		// console.table(this.state);
	}
}
