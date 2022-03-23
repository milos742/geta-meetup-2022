export const handleGameOut = (selectedGameOut, currPlayerScore, calculatedValue, currPlayerHits, hitValueString, lastHistoryItem) => {
	
	// const stateCopy = deepCopy(state);
	const calculatedScore = currPlayerScore - calculatedValue;
	const updatedCurrPlayerHits = currPlayerHits.push(hitValueString);
	const straightOutReturn = calculatedScore >= 0 ? ((updatedCurrPlayerHits), (lastHistoryItem.setWinner = true)) : ((updatedCurrPlayerHits), (lastHistoryItem.isOverflowed = true))



	switch(selectedGameOut) {
		case 'Straight Out':
			return straightOutReturn
		case 'Double Out':
			return calculatedScore > 1 ?
				(updatedCurrPlayerHits) : calculatedScore === 0 && hitValueString.includes('D') ?
				((updatedCurrPlayerHits), (lastHistoryItem.setWinner = true)) : ((updatedCurrPlayerHits), (lastHistoryItem.isOverflowed = true)) 
		case 'Triple Out':
			return calculatedScore > 2 ?
				(updatedCurrPlayerHits) : calculatedScore === 0 && hitValueString.includes('T') ?
				((updatedCurrPlayerHits), (lastHistoryItem.setWinner = true)) : ((updatedCurrPlayerHits), (lastHistoryItem.isOverflowed = true)) 
		default:
			return straightOutReturn
	}
}