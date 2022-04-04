import { Link } from "react-router-dom";
import { useGameContext } from "../GameProvider/GameProvider";
import { Row } from "../Row/Row";
import style from "./_header.module.css";

export function Header() {
	const gameContext = useGameContext();

	const rounds = gameContext.historyHits.filter(
		(p) => p.playerId === gameContext.historyHits[0].playerId
	);

	return (
		<Row className={style.header}>
			<Link to={`/`} className={style.link}>
				Back
			</Link>

			<div className={style.gameChosen}>
				<span>{gameContext.selectedGame}</span>
				<span> {gameContext.selectedGameOut}</span>
				<span> Round: {rounds.length}</span>
			</div>
		</Row>
	);
}
