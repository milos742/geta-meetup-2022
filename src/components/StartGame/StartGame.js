import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { Button } from "../Button/Button";
import style from "./_startGame.module.css";

export function StartGame() {
	const dispatch = useGameDispatch();
	const gameState = useGameContext();
	
    const history = useNavigate ();

	const isLinkDisabled =
		Object.values(gameState.players).length >= 2 &&
		!!gameState.selectedGame;

	const linkClassName = classNames(style.link, {
		[style.linkDisabled]: !isLinkDisabled,
	});

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
