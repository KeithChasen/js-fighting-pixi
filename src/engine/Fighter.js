export class Fighter {
	id = null;
	position = null;
	health = 100;

	update() {}

	onHit(damage) {
		this.health -= damage;
	}
}
