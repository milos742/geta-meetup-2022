import { v4 as uuidv4 } from "uuid";

const deepCopy = (data) => JSON.parse(JSON.stringify(data))

export const gameReducer = (state, action) => {
	switch (action.type) {
		case "ADD_PLAYER":
			const player = {
				id: uuidv4(),
				name: action.payload
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
			.map(player => player.id)
			.sort(() =>  0.5 - Math.random());

			stateCopy.activePlayerId = stateCopy.playerOrder[0];

			Object.keys(stateCopy.players).forEach((key) => {
				stateCopy.players[key].score = stateCopy.selectedGame
			});

			return stateCopy;
		case "ADD_HIT":
			console.log(state.playerOrder.length)
			console.log(state.historyHits.length)

			if(state.historyHits.length === 2) {
				state.activePlayerId = state.playerOrder[1]
				console.log('moze drugi igrac')
			}
			return {
				...state,
				historyHits: [...state.historyHits, action.payload]
			};
		case "REMOVE_HIT":
			return {
				...state, 
				historyHits: state.historyHits.filter( (_,i) => 
					i !== state.historyHits.length-1)
			};
		default:
			return state;
	}
};
