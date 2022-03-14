import { Button } from "../../components/Button/Button";
import { games } from "../../utils/constants";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

import style from "./_choseGame.module.css";

export function ChooseGame() {

    const dispatch = useGameDispatch();
	const gameState = useGameContext();

    const handleSetGame = (game) => {
		if (game !== gameState.selectedGame) {
			dispatch({
				type: "SELECT_GAME",
				payload: game,
			});
		}
	};

    return (
        <>
            <h2>Choose game:</h2>
			<div className={style.inputWrapper}>
				{Object.values(games).map((g) => (
					<Button
						key={g}
						className={`${style.btn} ${g === gameState.selectedGame && style.selected}`}
						theme={g !== gameState.selectedGame ? "secondary": "primary"
						}
						onClick={() => handleSetGame(g)}>
						{g}
					</Button>
				))}
			</div>
        </>
    )
}