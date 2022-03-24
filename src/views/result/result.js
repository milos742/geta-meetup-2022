import classNames from "classnames";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";

import { Avatar } from "../../components/Avatar/Avatar";
import { Button } from "../../components/Button/Button";
import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { Logo } from "../../components/Logo/Logo";
import { Row } from "../../components/Row/Row";
import style from "./_result.module.css";

export function Result() {
	const history = useNavigate();
	
	const gameState = useGameContext();
	const dispatch = useGameDispatch();

	const handleResetGame = () => {
		dispatch({
			type: "RESET_GAME",
		});

		history("/");
	};

	const newGameClass = classNames(style.newGame, {
		[style.startGame]: !gameState.winner.id,
	});

	return (
		<div className={style.result}>
			{gameState.winner.id && <Confetti className={style.confetti} gravity={0.2}/>}
			<Row className={style.row}>
				<Logo className={style.logo} />
			</Row>

			{gameState.winner.id && <Avatar key={gameState.winner.id} label={gameState.winner.name} winner={true} />}

			<ul className={style.avatarWrapper}>
				{Object.values(gameState.players)
					.sort((a, b) => a.score - b.score)
					.filter((p) => p.id !== gameState.winner.id)
					.map((player, i) => (
						<li key={player.id}>
							<span>{i + 2}.</span>
							<span>{player.name}</span>
						</li>
					))}
			</ul>

			<Button onClick={handleResetGame} className={newGameClass}>
				{gameState.winner.id ? 'NEW GAME' : 'START GAME'}
			</Button>
		</div>
	);
}
