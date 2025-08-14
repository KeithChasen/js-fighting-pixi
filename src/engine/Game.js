import { Application } from 'pixi.js';
import { InputManager } from './InputManager';
import { FightManager } from './FightManager';
import { Player } from './Player';
import { AIEnemy } from './AIEnemy';

export class Game {
	app = null;

	inputManager = new InputManager();
	fightManager = null;

	async init() {
		this.app = new Application();

		await this.app.init({
			resizeTo: window,
		});

		this.app.canvas.style.position = 'absolute';

		const player = new Player(100, 200, 100, 20, 'Player');
		const enemy = new AIEnemy(400, 200, 400, 20, 'Enemy');

		this.app.stage.addChild(player);
		this.app.stage.addChild(enemy);

		this.fightManager = new FightManager(player, enemy);

		document.body.appendChild(this.app.canvas);
	}

	start() {
		this.app &&
			this.app.ticker.add(() => {
				this.inputManager.update();
				this.fightManager.update(this.inputManager.state);
			});
	}
}
