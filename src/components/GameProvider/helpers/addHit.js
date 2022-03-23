import { deepCopy } from "./deepCopy";
import { handleGameOut } from "./handleGameOut";
import { parseHitValue } from "./parseHitValue";
import { setScore } from "./setScore";

export function addHit(state, action) {
	const stateCopy = deepCopy(state);
	let hitValueString = action.payload;
	let calculatedValue = parseHitValue(action.payload);
	const currPlayerScore = stateCopy.players[stateCopy.activePlayerId].score;
	const lastHistoryItem = stateCopy.historyHits[stateCopy.historyHits.length - 1];
	const currPlayerHits = lastHistoryItem.hits;

	handleGameOut(
		stateCopy.selectedGameOut,
		currPlayerScore,
		calculatedValue,
		currPlayerHits,
		hitValueString,
		lastHistoryItem
	);

	stateCopy.players[stateCopy.activePlayerId].score = setScore(stateCopy);

	if (stateCopy.players[stateCopy.activePlayerId].score === 0 && lastHistoryItem.setWinner) {
		stateCopy.winner = stateCopy.players[stateCopy.activePlayerId];
	}

	const hitsCount = currPlayerHits.length;

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
