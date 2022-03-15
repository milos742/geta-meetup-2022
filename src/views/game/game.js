import { Link } from "react-router-dom";

import { Board } from "../../components/Board/Board";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Header } from "../../components/Header/Header";
import { Logo } from "../../components/Logo/Logo";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";
import style from "./_game.module.css";

export function Game() {
	const gameState = useGameContext();

	if (!gameState.selectedGame || gameState.players.length < 1) {
		return (
			<div className={style.game}>
				<Logo />
				<Link to={`/`} className={style.link}>
					Go back and select game options
				</Link>
			</div>
		);
	}

	const rounds = gameState.historyHits.filter((p) => {
		return p.playerId === gameState.historyHits[0].playerId;
	});

	return (
		<div className={style.game}>
			<Header />
			<span>Round: {rounds.length}</span>
			{gameState.playerOrder.map((id) => {
				let history = [...gameState.historyHits]
					.reverse()
					.find((el) => el.playerId === id);

				return (
					<PlayerScore
						key={id}
						hits={history ? history.hits : []}
						player={gameState.players[id]}
					/>
				);
			})}
			<Board />
		</div>
	);
}
