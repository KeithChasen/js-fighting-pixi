import { Container, Graphics, Text } from 'pixi.js';

export class UIManager extends Container {
	constructor(player, enemy) {
		super();

		this.player = player;
		this.enemy = enemy;

		this.playerName = new Text({
			text: player.name,
			style: { fill: 0xffffff, fontSize: 20 },
		});
		this.playerName.position.set(20, 20);
		this.addChild(this.playerName);

		this.playerHealthBar = new Graphics();
		this.playerHealthBar.position.set(20, 50);
		this.addChild(this.playerHealthBar);

		this.enemyName = new Text({
			text: enemy.name,
			style: { fill: 0xffffff, fontSize: 20 },
		});
		this.enemyName.anchor.set(1, 0);
		this.enemyName.position.set(window.innerWidth - 20, 20);
		this.addChild(this.enemyName);

		this.enemyHealthBar = new Graphics();
		this.enemyHealthBar.position.set(window.innerWidth - 220, 50);
		this.addChild(this.enemyHealthBar);

		this.update();
	}

	update() {
		// update player scale
		this.playerHealthBar.clear();
		this.playerHealthBar.fill(0xff0000);
		this.playerHealthBar.rect(0, 0, 200 * (this.player.health / 100), 20);
		this.playerHealthBar.fill();

		this.playerHealthBar.setStrokeStyle(2, 0xffffff);
		this.playerHealthBar.rect(0, 0, 200, 20);

		// update enemy scale
		this.enemyHealthBar.clear();
		this.enemyHealthBar.fill(0xff0000);
		this.enemyHealthBar.rect(0, 0, 200 * (this.enemy.health / 100), 20);
		this.enemyHealthBar.fill();

		this.enemyHealthBar.setStrokeStyle(2, 0xffffff);
		this.enemyHealthBar.rect(0, 0, 200, 20);
	}
}
