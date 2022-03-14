import { useNavigate  } from "react-router-dom";
import style from "./_startGame.module.css";
import classNames from "classnames";
import { Button } from "../Button/Button";

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
    let history = useNavigate ();
	const handleSetGame = () => {
		dispatch({
			type: "INIT_GAME",
		});
        history("/game");
	};

	return (
		<Button className={linkClassName} onClick={handleSetGame}>
			start
		</Button>
	);
}
