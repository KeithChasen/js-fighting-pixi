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
	// sprite = null;
	currentAnimation = null;

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

		const atlasData = {
			frames,
			meta: {
				image: `/images/${sprite}-40.png`,
				size: { w: 256, h: 1280 },
			},
			animations: {
				idleLeft: Object.keys(frames),
			},
		};

		const texture = await Assets.load(atlasData.meta.image);

		texture.baseTexture.scaleMode = 'nearest';

		const spritesheet = new Spritesheet(texture, atlasData);
		await spritesheet.parse();

		const animatedSprite = new AnimatedSprite(spritesheet.animations.idleLeft);
		animatedSprite.scale.set(5);

		this.addChild(animatedSprite);

		animatedSprite.play();
		animatedSprite.animationSpeed = 0.13;
	}

	update() {
		// console.log(this.sprite);
	}

	onHit(damage) {
		this.health -= damage;
	}
}
