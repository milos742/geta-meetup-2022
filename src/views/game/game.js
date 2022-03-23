import {
	useEffect,
	useRef,
} from "react";

import { useNavigate } from "react-router-dom";

import { Board } from "../../components/Board/Board";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Header } from "../../components/Header/Header";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";
import style from "./_game.module.css";

export function Game() {
	const gameState = useGameContext();
	const history = useNavigate();
	const fieldRef = useRef(null);

	//@TODO Refatcor so it redirects to start view
	//@REFACTORED Now we check redirects to start view
	useEffect(() => {
		// Check if route is accessed without state that is needed
		if (!gameState.selectedGame || gameState.players.length < 1) {
			history("/");
		}

		if (gameState.activePlayerId && fieldRef.current) {
			fieldRef.current.scrollIntoView();
		}
	}, [gameState.selectedGame, gameState.players, history, gameState.activePlayerId]);

	return (
		<div className={style.game}>
			<Header />
		
			<div ref={fieldRef} className={style.gameWrapper}>
				{gameState.playerOrder.map((id) => {
					let history = [...gameState.historyHits].reverse().find((el) => el.playerId === id);

					return (
						<PlayerScore
							key={id}
							hits={history ? history.hits : []}
							player={gameState.players[id]}
						/>
					);
				})}
			</div>

			<Board />
		</div>
	);
}
