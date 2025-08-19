import {
	Assets,
	Container,
	Sprite,
	Spritesheet,
	Texture,
	AnimatedSprite,
} from 'pixi.js';
import { loadAtlasData } from './configs/spriteAnimations';
export class Fighter extends Container {
	id = null;
	health = 100;
	name = '';
	currentAnimation = null;
	animatedSprite = null;
	animations = {};

	velocityY = 0;
	isJumping = false;

	velocityX = 3;
	jumpVelocityX = 6;

	constructor(x, y, name) {
		super();

		this.name = name;

		const sprite = new Sprite(Texture.WHITE);
		sprite.width = 100;
		sprite.height = 200;
		// local position
		// sprite.position.set(100, 200);

		// container position
		this.position.set(x, y);

		this.addChild(sprite);
	}

	async load(sprite) {
		const atlasData = loadAtlasData(sprite);

		const texture = await Assets.load(atlasData.meta.image);

		texture.source.scaleMode = 'nearest';

		const spritesheet = new Spritesheet(texture, atlasData);
		await spritesheet.parse();

		for (const key in spritesheet.animations) {
			const anim = new AnimatedSprite(spritesheet.animations[key]);
			anim.scale.set(5);
			anim.animationSpeed =
				key === 'punchLeft' || key === 'kickLeft' ? 0.3 : 0.13;
			anim.visible = false;

			if (key === 'punchLeft' || key === 'kickLeft') {
				anim.loop = false; // do not loop animation if it's a kick or punch
			} else {
				anim.loop = true;
			}

			this.animations[key] = anim;
			this.addChild(anim);
		}

		this.playAnimation('idleLeft');
	}

	playAnimation(name) {
		if (this.currentAnimation === this.animations[name]) return;

		if (this.currentAnimation) {
			this.currentAnimation.visible = false;
			this.currentAnimation.stop();
		}

		if (this.animations[name]) {
			this.currentAnimation = this.animations[name];
			this.currentAnimation.visible = true;
			this.currentAnimation.gotoAndPlay(0);
		}
	}

	onHit(damage) {
		this.health -= damage;
	}
}
