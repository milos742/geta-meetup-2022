import { v4 as uuidv4 } from "uuid";
import { deepCopy } from "./helpers/deepCopy";
import { addHit } from "./helpers/addHit";
import { removeHit } from "./helpers/removeHit";
import { defaultGameState } from "./GameProvider";
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
				stateCopy.players[key].score = Number(stateCopy.selectedGame);
			});

			stateCopy.historyHits = [{ playerId: stateCopy.activePlayerId, hits: [] }];

			return stateCopy;

		case "ADD_HIT":
			return addHit(state, action);

		case "REMOVE_HIT":
			return removeHit(state, action);
			
		case "SET_WINNER":
			return {
				...state,
				winner: action.payload,
			};

		case "RESET_GAME":
			return {
				...defaultGameState,
			};
		default:
			return state;
	}
};
