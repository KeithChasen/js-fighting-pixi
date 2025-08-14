import { Container, Sprite, Texture } from 'pixi.js';
export class Fighter extends Container {
	id = null;
	health = 100;
	// sprite = null;

	constructor(x, y) {
		super();

		const sprite = new Sprite(Texture.WHITE);
		sprite.width = 100;
		sprite.height = 200;
		// local position
		// sprite.position.set(100, 200);

		// container position
		this.position.set(x, y);

		this.addChild(sprite);
	}

	update() {
		// console.log(this.sprite);
	}

	onHit(damage) {
		this.health -= damage;
	}
}
