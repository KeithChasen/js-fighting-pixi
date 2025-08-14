export class FightManager {
	fighters = {
		player: null,
		enemy: null,
	};

	constructor(player, enemy) {
		this.fighters = {
			player,
			enemy,
		};
	}

	update() {}
}
