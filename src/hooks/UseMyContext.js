import { useState } from "react";

export function useMyContext() {
	const [players, setPlayers] = useState([]);
	const [game, setGame] = useState("");
	const [settings, setSettings] = useState(true);

	const context = {
		players: {
			getPlayers: players,
			setPlayers: setPlayers,
		},

		game: {
			getGame: game,
			setGame: setGame,
		},

		settings: {
			getSettings: settings,
			setSettings: setSettings,
		},
	};

	return context;
}
