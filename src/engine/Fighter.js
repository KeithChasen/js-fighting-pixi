import { Container, Sprite, Texture } from 'pixi.js';
export class Fighter extends Container {
	id = null;
	// position = { x: 0, y: 0 };
	health = 100;
	// sprite = null;

	constructor() {
		super();
		// this.position = position;
		// this.sprite = new Sprite(Texture.WHITE);
		// this.sprite.width = 100;
		// this.sprite.height = 200;
		// this.sprite.position.set(100, 200);

		const sprite = new Sprite(Texture.WHITE);
		sprite.width = 100;
		sprite.height = 200;
		sprite.position.set(100, 200);

		this.addChild(sprite);
	}

	update() {
		// console.log(this.sprite);
	}

	onHit(damage) {
		this.health -= damage;
	}
}
