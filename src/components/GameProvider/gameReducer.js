import { v4 as uuidv4 } from "uuid";
import { deepCopy } from "./helpers/deepCopy";
import { addHit } from "./helpers/addHit";
import { removeHit } from "./helpers/removeHit";

export const gameReducer = (state, action) => {
	switch (action.type) {
		case "ADD_PLAYER":
			const player = {
				id: uuidv4(),
				name: action.payload,
			};
			return {
				...state,
				players: {
					...state.players,
					[player.id]: player,
				},
			};
		case "REMOVE_PLAYER":
			delete state.players[action.payload];
			return { ...state };
		case "SELECT_GAME":
			return {
				...state,
				selectedGame: action.payload,
			};
		case "INIT_GAME":
			const stateCopy = deepCopy(state);

			stateCopy.playerOrder = Object.values(state.players)
				.map((player) => player.id)
				.sort(() => 0.5 - Math.random());

			stateCopy.activePlayerId = stateCopy.playerOrder[0];

			Object.keys(stateCopy.players).forEach((key) => {
				stateCopy.players[key].score = stateCopy.selectedGame;
			});

			stateCopy.historyHits = [
				{ playerId: stateCopy.activePlayerId, hits: [] },
			];

			return stateCopy;
		case "ADD_HIT":
			return addHit(state, action);

		// const stateCopyHistoryHits = deepCopy(state.historyHits);

		// stateCopyHistoryHits[stateCopyHistoryHits.length - 1].hits.push(
		// 	action.payload
		// );

		// return {
		// 	...state,
		// 	historyHits: [...stateCopyHistoryHits],
		// };
		case "REMOVE_HIT":
			return removeHit(state, action);
		// const copyStateHistory = deepCopy(state.historyHits);
		// copyStateHistory[copyStateHistory.length - 1].hits.pop();

		// return {
		// 	...state,
		// 	historyHits: [...copyStateHistory],
		// };
		// case "NEXT_PLAYER":
		// 	let nextPlayerIndex =
		// 		state.playerOrder.findIndex((id) => {
		// 			return id === state.activePlayerId;
		// 		}) + 1;

		// 	if (nextPlayerIndex > state.playerOrder.length - 1) {
		// 		nextPlayerIndex = 0;
		// 	}

		// 	return {
		// 		...state,
		// 		historyHits: [
		// 			...state.historyHits,
		// 			{
		// 				playerId: state.playerOrder[nextPlayerIndex],
		// 				hits: [],
		// 			},
		// 		],
		// 		activePlayerId: state.playerOrder[nextPlayerIndex],
		// 	};
		case "PREV_PLAYER":
			let prevPlayerIndex =
				state.playerOrder.findIndex((id) => {
					return id === state.activePlayerId;
				}) - 1;

			if (prevPlayerIndex < 0) {
				prevPlayerIndex = state.playerOrder.length - 1;
			}

			let historyHits = [...state.historyHits];

			if (historyHits[historyHits.length - 1].hits <= 0) {
				historyHits.pop();
			}

			return {
				...state,
				historyHits: [...historyHits],
				activePlayerId: state.playerOrder[prevPlayerIndex],
			};
		default:
			return state;
	}
};
