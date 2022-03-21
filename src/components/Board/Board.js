import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";

import style from "./_board.module.css";

export function Board() {
	//@TODO Local state to hold multiplier
	//@DONE
	const [multiplier, setMultiplier] = useState("");
	const history = useNavigate();

	const gameState = useGameContext();
	const dispatch = useGameDispatch();

	const isDelButtonDisabled = gameState.historyHits[0].hits.length === 0;

	const addHitValue = (value) => {
		let mergeValue = multiplier + value;

		dispatch({
			type: "ADD_HIT",
			payload: mergeValue,
		});

		//@TODO Test this to check if there is any unnecesary re-renders
		//@DONE
		setMultiplier("");
	};

	const removeHitValue = () => {
		// Remove multiplier if any, before proceed with hit
		if (multiplier !== "") {
			setMultiplier("");
			return;
		}

		dispatch({
			type: "REMOVE_HIT",
		});
	};

	const handleSetMultiplier = (value) => {
		if (value !== multiplier) {
			setMultiplier(value);
		}
	};

	const checkMultiplierIsActive = (value) => {
		if ((multiplier === "T" && value === 25) || (multiplier !== "" && value === 0)) {
			return true;
		}
	};

	//@CHECK Is this approach ok to check for the winner?
	useEffect(() => {
		//@TODO Check if winning throw and set winner
		//@DONE
		if (gameState.players[gameState.activePlayerId].score === 0) {
			dispatch({
				type: "SET_WINNER",
				payload: gameState.players[gameState.activePlayerId],
			});

			//@TODO check if there is unnecesary re-renders
			//@DONE - We dont have to use MEMO because theese are not expensive computations
			history("/result");
		}
	}, [gameState.activePlayerId, gameState.players, dispatch, history]);

	return (
		<Row className={style.board}>
			{targets.map((value) => (
				<Button
					key={value}
					className={style.boardBtn}
					theme="secondary"
					onClick={() => addHitValue(value)}
					disabled={checkMultiplierIsActive(value)}>
					{value}
				</Button>
			))}

			<Button
				className={`${style.boardBtn} ${multiplier === "D" ? style.active : ""}`}
				onClick={() => handleSetMultiplier("D")}
				theme="secondary">
				D
			</Button>

			<Button
				className={`${style.boardBtn} ${multiplier === "T" ? style.active : ""}`}
				onClick={() => handleSetMultiplier("T")}
				theme="secondary">
				T
			</Button>

			<Button
				className={style.boardBtn}
				theme="secondary"
				onClick={() => removeHitValue()}
				disabled={isDelButtonDisabled}>
				DEL
			</Button>
		</Row>
	);
}
