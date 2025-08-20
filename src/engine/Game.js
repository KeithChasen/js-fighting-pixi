import { Application } from 'pixi.js';
import { InputManager } from './InputManager';
import { FightManager } from './FightManager';
import { Player } from './Player';
import { AIEnemy } from './AIEnemy';
import { UIManager } from './UIManager';

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

		const player = new Player(100, 400, 'Player');
		player.load();
		const enemy = new AIEnemy(window.innerWidth - 200, 400, 'Enemy');
		enemy.load(true);

		this.app.stage.addChild(player);
		this.app.stage.addChild(enemy);

		this.fightManager = new FightManager(player, enemy);

		// UI
		this.uiManager = new UIManager(player, enemy);
		this.app.stage.addChild(this.uiManager);

		document.body.appendChild(this.app.canvas);
	}

	start() {
		this.app &&
			this.app.ticker.add(() => {
				this.fightManager.update(this.inputManager);
				this.inputManager.update();
			});
	}
}
