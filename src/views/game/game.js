import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Board } from "../../components/Board/Board";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Header } from "../../components/Header/Header";
import { Logo } from "../../components/Logo/Logo";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";
import { Row } from "../../components/Row/Row";

import style from "./_game.module.css";

export function Game() {
	const gameState = useGameContext();
	const history = useNavigate();

	//@TODO Refatcor so it redirects to start view
	//@REFACTORED Now we check redirects to start view
	useEffect(() => {
		// Check if route is accessed without state that is needed
		if (!gameState.selectedGame || gameState.players.length < 1) {
			history("/");
		}
	}, [gameState.selectedGame, gameState.players, history]);

	return (
		<div className={style.game}>
			<Header />

			{gameState.playerOrder.length > 0 &&
				gameState.playerOrder.map((id) => {
					let history = [...gameState.historyHits]
						.reverse()
						.find((el) => el.playerId === id);

					return (
						<Row key={id}>
							<PlayerScore
								hits={history ? history.hits : []}
								player={gameState.players[id]}
							/>
						</Row>
					);
				})}
			<Board />
		</div>
	);
}
