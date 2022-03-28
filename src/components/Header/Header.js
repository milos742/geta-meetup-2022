import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGameContext } from "../GameProvider/GameProvider";
import { Row } from "../Row/Row";
import style from "./_header.module.css";

export function Header() {
	const gameContext = useGameContext();

	const [classes, setClasses] = useState();
	
	const rounds = gameContext.historyHits.filter((p) => {
		return p.playerId === gameContext.historyHits[0].playerId;
	});

	useEffect(() => {
		// This gets called after every render, by default
		// (the first one, and every one after that)
		console.log("render!");

		// If you want to implement componentWillUnmount,
		// return a function from here, and React will call
		// it prior to unmounting.
		return () => console.log("unmounting...");
	});

	return (
		<Row className={style.header}>
			{/* <Logo className={style.logo} /> */}
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
