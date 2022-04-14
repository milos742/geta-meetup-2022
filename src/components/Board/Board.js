import { useEffect, useState, useCallback } from "react";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";

import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";
import style from "./_board.module.css";

export function Board() {
	const [multiplier, setMultiplier] = useState("");
	const history = useNavigate();

	const gameState = useGameContext();
	const dispatch = useGameDispatch();

	const isDelButtonDisabled = gameState.historyHits[0]?.hits.length === 0;

	const resetMultiplier = () => {
		if(multiplier !== '')
		setMultiplier("");
	}

	const addHit = useCallback((value) => {
		const hitValue = multiplier + value;

		dispatch({
			type: "ADD_HIT",
			payload: hitValue,
		});
		resetMultiplier()
	}, [dispatch, multiplier]);

	const removeHitValue = useCallback(() => {
		dispatch({
			type: "REMOVE_HIT",
		});
		resetMultiplier()
	},[dispatch]);

	const handleSetMultiplier = (value) => {
		setMultiplier(value !== multiplier ? value : "");
	};

	const isNumberDisabled = (value) =>
		(multiplier === "T" && value === 25) || (multiplier !== "" && value === 0);

	useEffect(() => {
		if (gameState.winner.id) {
			history("/result");
		}
	}, [gameState.winner.id, history]);

	return (
		<Row className={style.board}>
			{targets.map((value) => (
				<Button
					key={value}
					theme="secondary"
					className={style.btn}
					onClick={() => addHit(value)}
					disabled={isNumberDisabled(value)}>
					{value}
				</Button>
			))}

			{["D", "T"].map((m) => (
				<Button
					key={m}
					theme="secondary"
					onClick={() => handleSetMultiplier(m)}
					className={classNames(style.btn, multiplier === m && style.active)}>
					{m}
				</Button>
			))}

			<Button
				className={style.btn}
				theme="secondary"
				onClick={removeHitValue}
				disabled={isDelButtonDisabled}>
				DEL
			</Button>
		</Row>
	);
}
