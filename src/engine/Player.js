import { Fighter } from './Fighter';

export class Player extends Fighter {
	isAttack = false;
	update(input) {
		// console.log('input.pressed', input.pressed);
		if (this.isAttack) return; // if attacking do not move

		let moving = false;
		if (input.state.left) {
			this.position.set(this.position.x - 1, this.position.y);
			this.playAnimation('walkLeft');
			moving = true;
		}

		if (input.state.right) {
			this.position.set(this.position.x + 1, this.position.y);
			this.playAnimation('walkLeft');
			moving = true;
		}

		if (input.pressed.s) {
			this.doAttack('punchLeft');
			return;
		}

		if (input.pressed.d) {
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
