import { Application } from 'pixi.js';
import { InputManager } from './InputManager';
import { Fighter } from './Fighter';

export class Game {
	app = null;

	fighter = null;

	inputManager = new InputManager();

	async init() {
		this.app = new Application();

		await this.app.init({
			resizeTo: window,
		});

		this.app.canvas.style.position = 'absolute';

		this.fighter = new Fighter();

		this.app.stage.addChild(this.fighter);

		document.body.appendChild(this.app.canvas);
	}

	start() {
		this.app &&
			this.app.ticker.add(() => {
				this.inputManager.update();
				this.fighter.update();
			});
	}
}
