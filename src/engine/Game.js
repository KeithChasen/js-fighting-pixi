import { Application } from 'pixi.js';
import { InputManager } from './InputManager';

export class Game {
	app = null;

	inputManager = new InputManager();

	async init() {
		this.app = new Application();

		await this.app.init({
			resizeTo: window,
		});

		this.app.canvas.style.position = 'absolute';

		document.body.appendChild(this.app.canvas);
	}

	start() {
		console.log(this.app, 'this app');
		this.app &&
			this.app.ticker.add(() => {
				this.inputManager.update();
			});
	}
}
