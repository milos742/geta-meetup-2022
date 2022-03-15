import { deepCopy } from "./deepCopy";

export function addHit(state, action) {
	const stateCopy = deepCopy(state);

	stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.push(action.payload);

	const hitsCount =
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;

	if (hitsCount === 3) {
		const currPlayerIndex = state.playerOrder.findIndex(
			(id) => id === state.activePlayerId
		);

		const nextPlayerIndex =
			currPlayerIndex + 1 === stateCopy.playerOrder.length
				? 0
				: currPlayerIndex + 1;
		const nextPlayerID = stateCopy.playerOrder[nextPlayerIndex];

		stateCopy.activePlayerId = nextPlayerID;

		stateCopy.historyHits = [
			...stateCopy.historyHits,
			{
				playerId: stateCopy.playerOrder[nextPlayerIndex],
				hits: [],
			},
		];
	}

	return stateCopy;
}
