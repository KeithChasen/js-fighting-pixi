import { Fighter } from './Fighter';

export class Player extends Fighter {
	update(input) {
		let moving = false;
		if (input.left) {
			this.position.set(this.position.x - 1, this.position.y);
			this.playAnimation('walkLeft');
			moving = true;
		}

		if (input.right) {
			this.position.set(this.position.x + 1, this.position.y);
			this.playAnimation('walkLeft');
			moving = true;
		}

		if (!moving) {
			this.playAnimation('idleLeft');
		}
	}
}
