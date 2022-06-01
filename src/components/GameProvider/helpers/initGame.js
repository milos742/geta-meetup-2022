import { deepCopy } from "../helpers/deepCopy";

export const initGame = (state) => {
	const stateCopy = deepCopy(state);

	stateCopy.playerOrder = Object.values(state.players)
		.map((player) => player.id)
		.sort(() => 0.5 - Math.random());

	stateCopy.activePlayerId = stateCopy.playerOrder[0];

	Object.keys(stateCopy.players).forEach((key) => {
		stateCopy.players[key].score = Number(stateCopy.selectedGame);
	});

	stateCopy.historyHits = [{ playerId: stateCopy.activePlayerId, hits: [] }];

	return stateCopy;
};
