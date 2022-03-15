import { deepCopy } from "./deepCopy";

export function removeHit(state, action) {
	const stateCopy = deepCopy(state);

	stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.pop();

	const hitsCount =
		stateCopy.historyHits[stateCopy.historyHits.length - 1].hits.length;
    
    if(hitsCount <= 0) {
        const currPlayerIndex = state.playerOrder.findIndex(
			(id) => id === state.activePlayerId
		);
    }   
}
