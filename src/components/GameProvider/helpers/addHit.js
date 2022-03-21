import { deepCopy } from "./deepCopy";
import { setScore } from "./setScore";
import { parseHitValue } from "./substringHit";

export function addHit(state, action) {
	const stateCopy = deepCopy(state);

	let hitValueString = action.payload;

	//@TODO Calculate value passed based on multiplier if any
	//@DONE
	let calculatedValue = parseHitValue(action.payload);

	const currPlayerScore = stateCopy.players[stateCopy.activePlayerId].score;
	const lastHistoryItem = stateCopy.historyHits[stateCopy.historyHits.length - 1];

	const currPlayerHits = stateCopy.historyHits[stateCopy.historyHits.length - 1].hits;
	//@TODO Set flag onto overflow score - Display hit but do not count it in total
	//@DONE
	if (currPlayerScore - calculatedValue >= 0) {
		currPlayerHits.push(hitValueString);
	} else {
		currPlayerHits.push(hitValueString);
		// Set flag on history object if is overflown
		lastHistoryItem.isOverflowed = true;
	}

	stateCopy.players[stateCopy.activePlayerId].score = setScore(stateCopy);

	const hitsCount = currPlayerHits.length;

	// Shift to new player history object
	if (hitsCount === 3 || lastHistoryItem.isOverflowed) {
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
