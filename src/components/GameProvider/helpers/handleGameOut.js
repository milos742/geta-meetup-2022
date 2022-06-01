import { gameOut } from "../../../utils/constants";

/**
 * PRovjerava poslednji hit:
 * - Da li ima prefix
 * - Da li da postavi winnera u zavisnosti od toga
 * koji je tip igre odabran
 * @param {*} param0 
 */

export const handleGameOut = ({
	stateCopy,
	currPlayerScore,
	calculatedValue, 
	currPlayerHits,
	hitValueString,
	lastHistoryItem
	}) => {
	
	const calculatedScore = currPlayerScore - calculatedValue;
	const updatedCurrPlayerHits = currPlayerHits.push(hitValueString);

	const gameOutReturn = (condition, multiplier) => {
		// Treba da provjeri koja je minimalna moguca vrijednost rezultata za odabranu igru
		if (calculatedScore > condition) {
			return updatedCurrPlayerHits;
		}
		
		// Provjerava da li je rezultat nula i da li u poslednjem hitu inkluduje
		// D ili T zavisno od toga koji je tip game-a selektovan
		if (calculatedScore === 0 && hitValueString.includes(multiplier)) {
			return (updatedCurrPlayerHits, lastHistoryItem.setWinner = true);
		}
		
		return (updatedCurrPlayerHits, lastHistoryItem.isOverflowed = true);
	}

	switch(stateCopy.selectedGameOut) {
		case gameOut.straightOut:
			 gameOutReturn(0, '');
			 break;
		case gameOut.doubleOut:
			 gameOutReturn(1, 'D');
			 break;
		case gameOut.tripleOut:
			 gameOutReturn(2, 'T');
			 break;
		default:
			 gameOutReturn(0, '');
	}
}