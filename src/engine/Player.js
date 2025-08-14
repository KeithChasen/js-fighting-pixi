import { Fighter } from './Fighter';

export class Player extends Fighter {
	update(input) {
		if (input.left) {
			this.position.set(this.position.x - 1, this.position.y);
		}

		if (input.right) {
			this.position.set(this.position.x + 1, this.position.y);
		}
	}
}
