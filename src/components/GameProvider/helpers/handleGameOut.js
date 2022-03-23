import { gameOut } from "../../../utils/constants";

export const handleGameOut = (
	selectedGameOut,
	currPlayerScore,
	calculatedValue, 
	currPlayerHits,
	hitValueString,
	lastHistoryItem
	) => {
	
	const calculatedScore = currPlayerScore - calculatedValue;
	const updatedCurrPlayerHits = currPlayerHits.push(hitValueString);

	const gameOutReturn = (condition, multiplier) => {
		if (calculatedScore > condition) {
			return updatedCurrPlayerHits;
		}
		
		if (calculatedScore === 0 && hitValueString.includes(multiplier)) {
			return (updatedCurrPlayerHits, lastHistoryItem.setWinner = true);
		}
		
		return (updatedCurrPlayerHits, lastHistoryItem.isOverflowed = true);
	}

	switch(selectedGameOut) {
		case gameOut.straightOut:
			return gameOutReturn(0, '')
		case gameOut.doubleOut:
			return gameOutReturn(1, 'D')
		case gameOut.tripleOut:
			return gameOutReturn(2, 'T')
		default:
			return gameOutReturn(0, '')
	}
}