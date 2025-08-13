import { Game } from './engine/Game';

window.onload = () => {
	const game = new Game();
	game.init().then(() => {
		game.start();
	});
};
