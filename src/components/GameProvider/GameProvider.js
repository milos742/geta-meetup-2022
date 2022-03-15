import {
	createContext,
	useContext,
	useReducer,
} from "react";

import { gameReducer } from "./gameReducer";

const GameProviderContext = createContext(undefined);
const GameProviderDispatch = createContext(undefined);

const defaultGameState = {
    gameList: ["501", "301"],
	selectedGame: null,
	activePlayerId: "",
	players: {},
    historyHits: [
        // {id: "eb8345eb-faa7-4225-adc7-fd390eb99c82", hits: [12,60, 11]},
        // {id: "bd40bcd7-c07d-465f-a0dc-9be341ab064b", hits: [14,20, 17]},
    ],
	playerOrder: []
}

export const useGameContext = () => {
    const context = useContext(GameProviderContext);
    if (!context) {
        return new Error ('useGameContext must be used inside GameProviderContext')
    }
    return context;
}

export const useGameDispatch = () => {
    const context = useContext(GameProviderDispatch);
    if (!context) {
        return new Error ('useGameDispatch must be used inside GameProviderDispatch')
    }
    return context;
}

export const GameProvider = ({
    children
}) => {
    const [state, dispatch] = useReducer(gameReducer, defaultGameState);
    return <GameProviderContext.Provider value={state}>
            <GameProviderDispatch.Provider value={dispatch}>
                {children}
            </GameProviderDispatch.Provider>
        </GameProviderContext.Provider>
    
}