import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Board } from "../../components/Board/Board";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Header } from "../../components/Header/Header";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";

import classNames from "classnames";
import style from "./_game.module.css";

export function Game() {
	const gameState = useGameContext();
	const history = useNavigate();

	const className = classNames(style.gameWrapper, {
		[style.evenSpace]: gameState.playerOrder.length <= 3,
	});

	useEffect(() => {
		if (!gameState.selectedGame || gameState.playerOrder.length < 1) {
			history("/");
		}
	}, [gameState.selectedGame, gameState.playerOrder, history]);

	return (
		<div className={style.game}>
			<Header />

			<div className={className}>
				{gameState.playerOrder.map((id) => {
					return (
						<PlayerScore
							id={id}
							key={id}
							className={style.playerScore}
							player={gameState.players[id]}
							isActive={gameState.activePlayerId === id}
						/>
					);
				})}
			</div>

			<Board />
		</div>
	);
}
