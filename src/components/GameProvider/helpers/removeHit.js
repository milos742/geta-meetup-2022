import { deepCopy } from "./deepCopy";

export function removeHit(state, action) {
	const stateCopy = deepCopy(state);

	// We are popping last hit from the last obj in history array on each DEL btn click
	stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.pop();

	// We are catching how much hits is left in hits
	const hitsCount =
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;

	if (hitsCount === 0) {

		// Get current player index
		const currPlayerIndex = state.playerOrder.findIndex(
			(id) => id === stateCopy.activePlayerId
		);
		
		// Set prev index
		let prevPlayerIndex =
			currPlayerIndex <= 0
				? stateCopy.playerOrder.length - 1
				: currPlayerIndex - 1;

		const prevPlayerID = stateCopy.playerOrder[prevPlayerIndex];

		// Pop last hit from newly selected history object if it exists
		if (
			stateCopy.historyHits[stateCopy.historyHits.length - 2] !==
			undefined
		) {
			stateCopy.historyHits[stateCopy.historyHits.length - 2].hits.pop();
		}

		// Pop history object from array if it is not first one
		if (
			stateCopy.historyHits[0] !==
			stateCopy.historyHits[stateCopy.historyHits.length - 1]
		) {
			stateCopy.activePlayerId = prevPlayerID;
			stateCopy.historyHits.pop();
		}

		// Set state
		stateCopy.historyHits = [...stateCopy.historyHits];
	}

	return stateCopy;
}
