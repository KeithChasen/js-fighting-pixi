import { Application } from 'pixi.js';

export class Game {
	app = null;

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
		this.app && this.app.ticker.add(() => {});
	}
}
