import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from "uuid";

const deepCopy = (data) => JSON.parse(JSON.stringify(data))

export const gameReducer = (state, action) => {
	switch (action.type) {
		case "SET_ACTIVE_PLAYER":
			return {
				...state,
				activePlayerId: action.payload,
			};
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

			stateCopy.playerOrder = Object.values(state.players).map(
				(player) => player.id
			);

			stateCopy.activePlayerId = stateCopy.playerOrder[0];

			Object.keys(stateCopy.players).forEach((key) => {
				stateCopy.players[key].score = stateCopy.selectedGame
			});
			return stateCopy;
		default:
			return state;
	}
};
