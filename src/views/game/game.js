import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Board } from "../../components/Board/Board";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Header } from "../../components/Header/Header";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";
import style from "./_game.module.css";

export function Game() {
	const gameState = useGameContext();
	const history = useNavigate();

	useEffect(() => {
		if (!gameState.selectedGame || gameState.players.length < 1) {
			history("/");
		}
	
	}, [gameState.selectedGame, gameState.players, history]);

	return (
		<div className={style.game}>
			<Header />
		
			<div className={style.gameWrapper}>
				{gameState.playerOrder.map((id) => {
					let history = [...gameState.historyHits].reverse().find((el) => el.playerId === id);

					return (
						<PlayerScore
							isActive={gameState.activePlayerId === id}
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
