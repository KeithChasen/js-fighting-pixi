import { Fighter } from './Fighter';

export class Player extends Fighter {
	isAttack = false;
	update(input) {
		if (this.isAttack) return; // if attacking do not move

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

		if (input.s) {
			this.doAttack('punchLeft');
			return;
		}

		if (input.d) {
			this.doAttack('kickLeft');
			return;
		}

		if (!moving) {
			this.playAnimation('idleLeft');
		}
	}

	doAttack(type) {
		this.isAttack = true;
		this.playAnimation(type);

		this.currentAnimation.onComplete = () => {
			this.isAttack = false;
			this.playAnimation('idleLeft');
		};
	}
}
