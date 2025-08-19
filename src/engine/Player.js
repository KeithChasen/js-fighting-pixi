import { Fighter } from './Fighter';

export class Player extends Fighter {
	isAttack = false;
	update(input) {
		if (this.isAttack) return; // if attacking do not move

		let moving = false;
		if (input.state.left) {
			this.position.set(
				this.position.x -
					(this.isJumping ? this.jumpVelocityX : this.velocityX),
				this.position.y
			);
			if (this.isJumping) {
				this.playAnimation('backFlip');
			} else {
				this.playAnimation('walkLeft');
			}

			moving = true;
		}

		if (input.state.right) {
			this.position.set(
				this.position.x +
					(this.isJumping ? this.jumpVelocityX : this.velocityX),
				this.position.y
			);
			if (this.isJumping) {
				this.playAnimation('flip');
			} else {
				this.playAnimation('walkLeft');
			}
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

		// jump
		if (input.pressed.up && !this.isJumping) {
			this.velocityY = -12;
			this.isJumping = true;
		}

		if (this.isJumping) {
			this.velocityY += 0.5;
		}

		this.position.set(this.position.x, this.position.y + this.velocityY);

		// 400 is the initial y value (fix hardcode)
		//todo: check if we can omit it when not jumping
		if (this.isJumping && this.position.y >= 400) {
			this.position.set(this.position.x, 400);
			this.velocityY = 0;
			this.isJumping = false;
		}
		// jump

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
