import { Application } from 'pixi.js';
import { InputManager } from './InputManager';
import { Fighter } from './Fighter';
import { FightManager } from './FightManager';

export class Game {
	app = null;

	// fighter = null;

	inputManager = new InputManager();
	fightManager = null;

	async init() {
		this.app = new Application();

		await this.app.init({
			resizeTo: window,
		});

		this.app.canvas.style.position = 'absolute';

		const player = new Fighter(100, 200);
		const enemy = new Fighter(400, 200);

		this.app.stage.addChild(player);
		this.app.stage.addChild(enemy);

		this.fightManager = new FightManager(player, enemy);

		document.body.appendChild(this.app.canvas);
	}

	start() {
		this.app &&
			this.app.ticker.add(() => {
				this.inputManager.update();
				this.fightManager.update();
			});
	}
}
