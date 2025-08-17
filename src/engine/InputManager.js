export class InputManager {
	state = {
		up: false,
		down: false,
		left: false,
		right: false,
		s: false,
		d: false,
	};

	constructor() {
		window.addEventListener('keydown', e => this.onKey(e, true));
		window.addEventListener('keyup', e => this.onKey(e, false));
	}

	onKey(e, pressed) {
		if (e.code === 'ArrowLeft') this.state.left = pressed;
		if (e.code === 'ArrowRight') this.state.right = pressed;
		if (e.code === 'ArrowDown') this.state.down = pressed;
		if (e.code === 'ArrowUp') this.state.up = pressed;
		if (e.code === 'KeyS') this.state.s = pressed;
		if (e.code === 'KeyD') this.state.d = pressed;
	}

	update() {
		// console.table(this.state);
		//process collected events (combos??) and dispatch them maybe async
	}
}
