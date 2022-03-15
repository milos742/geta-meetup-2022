export const data = {

	gameList: ["501", "301"],
	selectedGame: null,
	activePlayerId: "0",

	players: {
		"0": { id: 0, name: "Draza", score: 501, historyHits: [] },
		"1": { id: 1, name: "Draza", score: 501 },
		"2": { id: 2, name: "Draza", score: 501 },
		"3": { id: 3, name: "Draza", score: 501 },
	},

	historyHits: [
		{ playerd: "0", hits: [10, 14, 18] },
		{ playerd: "1", hits: [10, 14, 18] },
		{ playerd: "2", hits: [10, 14, 18] },
		{ playerd: "3", hits: [10, 14, 18] },
	],

	playerOrder: [
		"0", "1", "2", "3"
	]
};

// @TODO: function next player

function undo() {
	const copyArry = [...data.historyHits];
	const lastMove = copyArry[copyArry.length - 1];

	data.players[lastMove.playerd].score += lastMove.hits[lastMove.hits.length - 1];
	lastMove.hits.pop();

	if (lastMove.hits.length === 0) {
		data.historyHits.pop();
	}
}


function setGame(game, players) {
	const newPLayers = players.map((player) => {
		player.result = game;
	});
	newPLayers[0].active = true;
	data.players = newPLayers;
}


function setResult(hit) {
	let newPlayers = [...data.players];
	let activeIndex = newPlayers.findIndex((player) => player.active);
	newPlayers[activeIndex].result -= hit;
	setPlayersState(newPlayers);
}


function setActivePlayer() {
	let newPlayers = [...data.players];
	let activeIndex = newPlayers.findIndex((player) => player.active);
	newPlayers = newPlayers.map((player) => (player.active = false));
	newPlayers[(activeIndex + 1) % (newPlayers.length - 1)].active = true;
	setPlayersState(newPlayers);
}
