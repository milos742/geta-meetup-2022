import { Link } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import style from "./_game.module.css";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { PlayerScore } from "../../components/PlayerScore/PlayerScore";

export function Game() {
	const gameContext = useGameContext();
	const dispatch = useGameDispatch();

	if (!gameContext.selectedGame || gameContext.players.length < 1) {
		return (
			<div className={style.game}>
				<Link to={`/`} className={style.link}>
					Go back and select game options
				</Link>
			</div>
		);
	}

	return (
		<div className={style.game}>
			<Header />

			{gameContext.playerOrder?.map((id) => (
				<PlayerScore key={id} player={gameContext.players[id]} />
			))}
		</div>
	);
}
