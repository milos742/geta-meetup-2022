import { Button } from "../../components/Button/Button";
import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import {
	games,
	winRule,
} from "../../utils/constants";
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

	const handleSetGameOut = (winRule) => {
		if (winRule !== gameState.selectedWinRule) {
			dispatch({
				type: "SELECT_GAME_OUT",
				payload: winRule,
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
						theme={g !== gameState.selectedGame ? "secondary": "primary"}
						onClick={() => handleSetGame(g)}>
						{g}
					</Button>
				))}
			</div>

			<h2>Choose game out:</h2>
			<div className={style.inputWrapper}>
				{Object.values(winRule).map((g) => (
					<Button
						key={g}
						className={`${style.btn} ${g === gameState.selectedGameOut && style.selected}`}
						theme={g !== gameState.selectedGameOut ? "secondary": "primary"}
						onClick={() => handleSetGameOut(g)}>
						{g}
					</Button>
				))}
			</div>
		</>
	)
}