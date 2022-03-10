import { v4 as uuidv4 } from 'uuid';

export const gameReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_PLAYER':
            return {
                ...state,
                activePlayerId: action.payload
            }
        case 'ADD_PLAYER':
            const player = {
                id: uuidv4(),
                name: action.payload,
            }
            return {
                ...state,
                players: {
                    ...state.players,
                    [player.id]: player
                }
            };
        case 'REMOVE_PLAYER':
            delete state.players[action.payload];
            return {...state};
        case 'SET_GAME':
            return {
                ...state,
                selectedGame: action.payload
            }
        default:
            return state;
    }
}