import Button from "../../buttons/Button";

import { useMyContext } from "../../hooks/UseMyContext";

/**
 * Single game
 *
 * @param {*} props
 * @returns
 */
const SingleGame = (props) => {
	const { game, handleSetGame, getGame } = props;


	
	return (
		<Button
			href=""
			text={game}
			style={{ width: "100%" }}
			cssClass={`button--radio ${game === getGame && "active"}`}
			onClick={() => handleSetGame(game)}
		/>
	);
};

export default SingleGame;
