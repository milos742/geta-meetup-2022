import { deepCopy } from "./deepCopy";
import { setScore } from "./setScore";

export function addHit(state, action) {
	const stateCopy = deepCopy(state);
	const hitValue = Number(action.payload);
	let currPlayerScore = stateCopy.players[stateCopy.activePlayerId].score;
	let lastHistory = stateCopy.historyHits[stateCopy.historyHits.length - 1];

	//@TODO Set flag onto overflow score - Display hit but do not count it in total
	//@DONE
	if (currPlayerScore - hitValue >= 0) {
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.push(hitValue);
	} else {
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.push(hitValue);

		// Set flag on history object if is overflown
		stateCopy.historyHits[stateCopy.historyHits.length - 1].isOverflowed = true;
	}

	currPlayerScore = setScore(stateCopy);
	stateCopy.players[stateCopy.activePlayerId].score = currPlayerScore;

	// Check if winning throw
	if (currPlayerScore === 0) {
		console.log("Winner is ", stateCopy.players[stateCopy.activePlayerId]);
	}

	const hitsCount = stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;

	if (hitsCount === 3 || stateCopy.historyHits[stateCopy.historyHits.length - 1].isOverflowed) {
		const currPlayerIndex = state.playerOrder.findIndex((id) => id === state.activePlayerId);
		const nextPlayerIndex = currPlayerIndex + 1 === stateCopy.playerOrder.length ? 0 : currPlayerIndex + 1;
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
