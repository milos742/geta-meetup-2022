import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";
import { useNavigate } from "react-router-dom";


import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";

import style from "./_board.module.css";

export function Board() {
	// Local state to hold multiplier
	const [multiplier, setMultiplier] = useState("");
	const history = useNavigate();

	const gameState = useGameContext();
	const dispatch = useGameDispatch();

	const isDelButtonDisabled = gameState.historyHits[0].hits.length === 0;

	//@TODO Refactor into two actions not four
	let historyHitsLength = gameState.historyHits[gameState.historyHits.length - 1].hits.length;

	const addHitValue = (value) => {
		let mergeValue = multiplier + value;

		dispatch({
			type: "ADD_HIT",
			payload: mergeValue,
		});

		//@TODO Test this to check if there is any unnecesary re-renders
		setMultiplier("");
	};

	const removeHitValue = () => {
		dispatch({
			type: "REMOVE_HIT",
		});
	};

	const handleSetMultiplier = (multiplier) => {
		setMultiplier(multiplier);
	};

	useEffect(() => {
		if (gameState.players[gameState.activePlayerId].score === 0) {
			//@TODO Check if winning throw and set winner
			console.log("Winner is ", gameState.players[gameState.activePlayerId].score);

			dispatch({
				type: "SET_WINNER",
				payload: gameState.players[gameState.activePlayerId],
			});

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
					onClick={() => addHitValue(value)}>
					{value}
				</Button>
			))}

			<Button
				className={style.boardBtn}
				onClick={() => handleSetMultiplier("D")}
				theme="secondary">
				D
			</Button>

			<Button
				className={style.boardBtn}
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
