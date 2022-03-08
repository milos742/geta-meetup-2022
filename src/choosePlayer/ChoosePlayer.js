import SinglePlayerInput from "./singlePlayerInput/SinglePlayerInput";
import SingleAddedPlayer from "./singleAddedPlayer/SingleAddedPlayer";

import { useContext } from "react";
import ContextProvider from "../contexts/ContextProvider";

/**
 * This is ChoosePLayer component
 *
 * It is a container for the SingleAddedPlayer.js and SinglePlayerInput.js
 *
 *
 * @param {*} props
 * @returns
 */
const ChoosePlayer = (props) => {
	// Get All added players
	const {
		players: { getPlayers },
	} = useContext(ContextProvider);

	const singlePlayersMapped = getPlayers.map((player, i) => (
		<SingleAddedPlayer key={i} player={player} />
	));

	return (
		<div className="row">
			<SinglePlayerInput />
			{singlePlayersMapped.length > 0 && singlePlayersMapped}
		</div>
	);
};

export default ChoosePlayer;
