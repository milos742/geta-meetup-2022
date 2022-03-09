export const data = {
	game: {
		gameList: ["501", "301"],
		selectedGame: null,
	},

	players: [
		{ id: 0, name: "Draza", active: false, result: 0 },
		{ id: 1, name: "Vuk", active: false, result: 0 },
		{ id: 2, name: "Nikola", active: false, result: 0 },
		{ id: 3, name: "Milos", active: false, result: 0 },
	],
};

function setGame(game, players) {
	const newPLayers = players.map((player) => {
		player.result = game;
	});
	newPLayers[0].active = true;
	data.players = newPLayers;
}

// Set result
function setResult(prevResult, hit) {
	let newPlayers = [...data.players];
	let activeIndex = newPlayers.findIndex((player) => player.active);
	newPlayers[activeIndex].result -= hit;
	setPlayersState(newPlayers);
}

// Set active
function setActivePlayer() {
	let newPlayers = [...data.players];
	let activeIndex = newPlayers.findIndex((player) => player.active);
	newPlayers = newPlayers.map((player) => (player.active = false));
	newPlayers[(activeIndex + 1) % (newPlayers.length - 1)].active = true;
	setPlayersState(newPlayers);
}
