import { Button } from "../../components/Button/Button";
import { Avatar } from "../../components/Avatar/Avatar";
import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";
import { Logo } from "../../components/Logo/Logo";
import { Row } from "../../components/Row/Row";
import { useNavigate } from "react-router-dom";
import style from "./_result.module.css";

export function Result() {
	const history = useNavigate();
	
	const gameState = useGameContext();
	const dispach = useGameDispatch();

	const handleResetGame = () => {
		dispach({
			type: "RESET_GAME",
		});

		history("/");
	};

	return (
		<div className={style.result}>
			<Row className={style.row}>
				<Logo className={style.logo} />
			</Row>

			<Avatar key={gameState.winner.id} label={gameState.winner.name} winner={true} />

			<ul className={style.avatarWrapper}>
				{Object.values(gameState.players)
					.sort((a, b) => a.score - b.score)
					.filter((p) => p.id !== gameState.winner.id)
					.map((player, i) => (
						<li key={player.id}>
							<span>{i + 2}.</span>
							<span>{player.name}</span>

							{/* <Avatar key={player.id} label={player.name} /> */}
						</li>
					))}
			</ul>

			<Button onClick={handleResetGame} className={style.newGame}>
				NEW GAME
			</Button>
		</div>
	);
}
