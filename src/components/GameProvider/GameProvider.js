import {
	createContext,
	useContext,
	useReducer,
} from "react";

import { gameReducer } from "./gameReducer";

const GameProviderState = createContext(undefined);
const GameProviderDispatch = createContext(undefined);

export const defaultGameState = {
	selectedGame: null,
	selectedGameOut: null,
	activePlayerId: "",
	players: {},
	historyHits: [],
	playerOrder: [],
	winner: {},
};

/**
 * Hook for getting state
 *
 * @returns {Object}
 */
export const useGameContext = () => {
	const context = useContext(GameProviderState);

	if (context === undefined) {
		return new Error("useGameContext must be used inside GameProviderState");
	}

	return context;
};

/**
 * Hook for setting state
 *
 * @returns
 */
export const useGameDispatch = () => {
	const context = useContext(GameProviderDispatch);

	if (context === undefined) {
		return new Error("useGameDispatch must be used inside GameProviderDispatch");
	}

	return context;
};



export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, defaultGameState);

	return (
		<GameProviderState.Provider value={state}>
			<GameProviderDispatch.Provider value={dispatch}>
				{children}
			</GameProviderDispatch.Provider>
		</GameProviderState.Provider>
	);
};
