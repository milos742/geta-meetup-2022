import { v4 as uuidv4 } from "uuid";

import { defaultGameState } from "./GameProvider";
import { addHit } from "./helpers/addHit";
import { removeHit } from "./helpers/removeHit";
import { initGame } from "./helpers/initGame";

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

		case "SELECT_GAME_OUT":
			return {
				...state,
				selectedGameOut: action.payload,
			};

		case "INIT_GAME":
			return initGame(state);

		case "ADD_HIT":
			return addHit(state, action);

		case "REMOVE_HIT":
			return removeHit(state, action);

		case "RESET_GAME":
			return {
				...defaultGameState,
			};
		default:
			return state;
	}
};
