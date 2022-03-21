import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Row } from "../Row/Row";

import { useGameContext } from "../GameProvider/GameProvider";

import style from "./_header.module.css";

export function Header() {
	const gameContext = useGameContext();

	return (
		<Row className={style.header}>
			<Logo className={style.logo} />

			<div className={style.gameChosen}>{gameContext.selectedGame}</div>

			<Link to={`/`} className={style.link}>
				Back
			</Link>
		</Row>
	);
}
