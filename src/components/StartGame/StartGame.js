import { Link } from "react-router-dom";
import style from "./_startGame.module.css";
import classNames from "classnames";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

export function StartGame() {
	const dispatch = useGameDispatch();
	const gameState = useGameContext();

	const isLinkDisabled =
		Object.values(gameState.players).length >= 2 &&
		!!gameState.selectedGame;

	const linkClassName = classNames(style.link, {
		[style.linkDisabled]: !isLinkDisabled,
	});

	const handleSetOrder = () => {
		let playerOrder = Object.values(gameState.players).map(
			(player) => player.id
		);
		dispatch({
			type: "SET_ORDER",
			payload: playerOrder,
		});
	};

	return (
		<Link to={`/game`} className={linkClassName} onClick={handleSetOrder}>
			start
		</Link>
	);
}
