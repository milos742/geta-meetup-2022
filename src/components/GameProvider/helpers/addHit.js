import { deepCopy } from "./deepCopy";
import { setScore } from "./setScore";
import { getSubstringHit } from "./substringHit";

export function addHit(state, action) {
	const stateCopy = deepCopy(state);

	let hitValueString = action.payload;

	//@TODO Calculate value passed based on multiplier if any
	//@DONE
	let calculatedValue = getSubstringHit(action.payload);

	let currPlayerScore = stateCopy.players[stateCopy.activePlayerId].score;
	let lastHistory = stateCopy.historyHits[stateCopy.historyHits.length - 1];

	//@TODO Set flag onto overflow score - Display hit but do not count it in total
	//@DONE
	if (currPlayerScore - calculatedValue >= 0) {
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.push(hitValueString);
	} else {
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.push(hitValueString);
		// Set flag on history object if is overflown
		stateCopy.historyHits[stateCopy.historyHits.length - 1].isOverflowed = true;
	}

	currPlayerScore = setScore(stateCopy);
	stateCopy.players[stateCopy.activePlayerId].score = currPlayerScore;

	const hitsCount = stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;

	// Shift to new player history object
	if (hitsCount === 3 || lastHistory.isOverflowed) {
		const currPlayerIndex = state.playerOrder.findIndex((id) => id === state.activePlayerId);
		const nextPlayerIndex =
			currPlayerIndex + 1 === stateCopy.playerOrder.length ? 0 : currPlayerIndex + 1;
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
