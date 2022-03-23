import { Link } from "react-router-dom";

import { useGameContext } from "../GameProvider/GameProvider";
import { Row } from "../Row/Row";
import style from "./_header.module.css";

export function Header() {
	const gameContext = useGameContext();

	const rounds = gameContext.historyHits.filter((p) => {
		return p.playerId === gameContext.historyHits[0].playerId;
	});

	return (
		<Row className={style.header}>
			{/* <Logo className={style.logo} /> */}
			<Link to={`/`} className={style.link}>
				Back
			</Link>
				<span className={style.link}>{gameContext.selectedGame}</span>
				<span className={style.link}>{gameContext.selectedGameOut}</span>
				<span className={style.link}>Round: {rounds.length}</span>

		</Row>
	);
}
