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
				this.playAnimation('walk');
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
				this.playAnimation('frontFlip');
			} else {
				this.playAnimation('walk');
			}
			moving = true;
		}

		if (input.pressed.s) {
			this.doAttack('punch');
			return;
		}

		if (input.pressed.d) {
			this.doAttack('kick');
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
		if (this.isJumping && this.position.y >= 400) {
			this.position.set(this.position.x, 400);
			this.velocityY = 0;
			this.isJumping = false;
		}
		// jump

		if (!moving) {
			this.playAnimation('idle');
		}
	}

	doAttack(type) {
		this.isAttack = true;
		this.playAnimation(type);

		this.currentAnimation.onComplete = () => {
			this.isAttack = false;
			this.playAnimation('idle');
		};
	}
}
