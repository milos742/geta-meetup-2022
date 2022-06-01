import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

import {
	gameOut,
	games,
} from "../../utils/constants";

import style from "./_choseGame.module.css";
import { ChoosingList } from "../ChoosingList/ChoosingList"

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

	const handleSetGameOut = (gameOut) => {
		if (gameOut !== gameState.selectedGameOut) {
			dispatch({
				type: "SELECT_GAME_OUT",
				payload: gameOut,
			});
		}
	};

	return (
		<div className={style.wrapper}>
			<ChoosingList
				item={games}
				title='Choose game:'
				onClick={handleSetGame}
				buttonClassName={style.btnHalf}
				selected={gameState.selectedGame}
				wrapperClassName={style.buttonsWrapper}
			/>

			<ChoosingList
				item={gameOut}
				onClick={handleSetGameOut}
				buttonClassName={style.btnOneThird}
				selected={gameState.selectedGameOut}
				wrapperClassName={style.buttonsWrapper}
			/>
		</div>
	)
}