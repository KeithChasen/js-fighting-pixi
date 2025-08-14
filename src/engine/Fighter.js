import { Container, Sprite, Texture, Text, TextStyle } from 'pixi.js';
export class Fighter extends Container {
	id = null;
	health = 100;
	name = '';
	// sprite = null;

	constructor(x, y, tx, ty, name) {
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

		const style = new TextStyle({
			fontSize: 40,
			fontWeight: 'bold',
			fill: 0xffffff,
		});

		const text = new Text({
			text: `${name}: ${this.health}`,
			style,
		});

		text.position.set(0, -100);

		this.addChild(text);
	}

	update() {
		// console.log(this.sprite);
	}

	onHit(damage) {
		this.health -= damage;
	}
}
