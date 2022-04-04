import { deepCopy } from "./deepCopy";
import { setScore } from "./setScore";

export function removeHit(state, action) {
	const stateCopy = deepCopy(state);

	// We are catching how much hits is thrown
	const hitsCount = stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;

	if (hitsCount === 0) {
		const currPlayerIndex = state.playerOrder.findIndex(
			(id) => id === stateCopy.activePlayerId
		);

		// Set prev index
		const prevPlayerIndex =
			currPlayerIndex <= 0 ? stateCopy.playerOrder.length - 1 : currPlayerIndex - 1;

		stateCopy.activePlayerId = stateCopy.playerOrder[prevPlayerIndex];

		if (stateCopy.historyHits.length > 1) {
			stateCopy.historyHits.pop();
		}

		// Set history flag
		stateCopy.historyHits[stateCopy.historyHits.length - 1].isOverflowed = false;
	}

	const currRoundHits = stateCopy.historyHits[stateCopy.historyHits.length - 1].hits;

	currRoundHits.pop();

	stateCopy.players[stateCopy.activePlayerId].score = setScore(stateCopy);

	return stateCopy;
}
