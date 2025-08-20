import {
	Assets,
	Container,
	Sprite,
	Spritesheet,
	Texture,
	AnimatedSprite,
	ColorMatrixFilter,
} from 'pixi.js';

import { atlases } from './configs/v';
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

	parseAnimationSpeed(key) {
		if (key === 'punch' || key === 'kick') return 0.3;
		if (key === 'frontFlip' || key === 'backFlip') return 0.2;
		return 0.15;
	}

	async loadAnimation(name) {
		const atlasData = atlases[name];

		const texture = await Assets.load(atlasData.meta.image);
		texture.source.scaleMode = 'nearest';

		const spritesheet = new Spritesheet(texture, atlasData);
		await spritesheet.parse();

		return spritesheet;
	}

	async load(enemy) {
		const names = ['idle', 'walk', 'punch', 'kick', 'frontFlip', 'backFlip'];

		const filter = new ColorMatrixFilter();
		filter.hue(enemy ? 120 : 0, false);

		for (const name of names) {
			const sheet = await this.loadAnimation(name);
			const anim = new AnimatedSprite(sheet.animations[name]);

			anim.scale.set(5);
			anim.animationSpeed = this.parseAnimationSpeed(name);
			anim.visible = false;
			anim.loop = !(name === 'punch' || name === 'kick');

			anim.filters = [filter];

			this.animations[name] = anim;
			this.addChild(anim);
		}

		this.playAnimation('idle');
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
