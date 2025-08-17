import {
	Assets,
	Container,
	Sprite,
	Spritesheet,
	Texture,
	AnimatedSprite,
} from 'pixi.js';
export class Fighter extends Container {
	id = null;
	health = 100;
	name = '';
	currentAnimation = null;
	animatedSprite = null;
	animations = {};

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
		const frames = {};
		for (let i = 0; i < 6; i++) {
			frames[`idleLeft${i + 1}`] = {
				frame: { x: 32 * (i + 1), y: 32, w: 32, h: 32 },
			};
		}

		for (let i = 0; i < 7; i++) {
			frames[`walkLeft${i + 1}`] = {
				frame: { x: 32 * (i + 1), y: 0, w: 32, h: 32 },
			};
		}

		const atlasData = {
			frames,
			meta: {
				image: `/images/${sprite}-40.png`,
				size: { w: 256, h: 1280 },
			},
			animations: {
				idleLeft: Object.keys(frames).filter(key => key.includes('idleLeft')),
				walkLeft: Object.keys(frames).filter(key => key.includes('walkLeft')),
			},
		};

		const texture = await Assets.load(atlasData.meta.image);

		texture.baseTexture.scaleMode = 'nearest';

		const spritesheet = new Spritesheet(texture, atlasData);
		await spritesheet.parse();

		// this.animations = spritesheet.animations;

		for (const key in spritesheet.animations) {
			const anim = new AnimatedSprite(spritesheet.animations[key]);
			anim.scale.set(5);
			anim.animationSpeed = 0.13;
			anim.visible = false;
			anim.loop = true;
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

	update() {
		// console.log(this.sprite);
	}

	onHit(damage) {
		this.health -= damage;
	}
}
