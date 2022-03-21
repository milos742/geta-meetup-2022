import { parseHitValue } from "./parseHitValue";

export const setScore = (stateCopy) => {
	let newScore = Number(stateCopy.selectedGame);

	stateCopy.historyHits
		.filter((p) => p.playerId === stateCopy.activePlayerId && !p.isOverflowed)
		.forEach((hh) => {
			hh.hits.forEach((hit) => {
				newScore -= parseHitValue(hit);
			});
		});

	return newScore;
};
