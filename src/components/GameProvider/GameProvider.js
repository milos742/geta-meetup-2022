import { createContext, useContext, useReducer } from "react";

import { gameReducer } from "./gameReducer";

const GameProviderContext = createContext(undefined);
const GameProviderDispatch = createContext(undefined);

const defaultGameState = {
	selectedGame: null,
	activePlayerId: "",
	players: {},
	historyHits: [],
	playerOrder: [],
};

/**
 * Hook for getting state
 * 
 * @returns {Object}
 */
export const useGameContext = () => {
	const context = useContext(GameProviderContext);

	if (!context) {
		return new Error(
			"useGameContext must be used inside GameProviderContext"
		);
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

	if (!context) {
		return new Error(
			"useGameDispatch must be used inside GameProviderDispatch"
		);
	}

	return context;
};

export const GameProvider = ({ children }) => {
	const [state, dispatch] = useReducer(gameReducer, defaultGameState);

	return (
		<GameProviderContext.Provider value={state}>
			<GameProviderDispatch.Provider value={dispatch}>
				{children}
			</GameProviderDispatch.Provider>
		</GameProviderContext.Provider>
	);
};
