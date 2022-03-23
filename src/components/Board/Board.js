import {
	useEffect,
	useState,
} from "react";

import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";
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
		dispatch({
			type: "REMOVE_HIT",
		});
		setMultiplier("");
	};

	const handleSetMultiplier = (value) => {
		setMultiplier(value !== multiplier ? value : "");
	};

	const isNumberDisabled = (value) =>
		(multiplier === "T" && value === 25) || (multiplier !== "" && value === 0);

	//@CHECK Is this approach ok to check for the winner?
	//@REFACTORED Now we check if there is a winner and immediatly
	useEffect(() => {
		//@TODO Check if winning throw and set winner
		//@DONE
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
					className={style.boardBtn}
					onClick={() => addHitValue(value)}
					disabled={isNumberDisabled(value)}>
					{value}
				</Button>
			))}

			{["D", "T"].map((m) => (
				<Button
					key={m}
					theme="secondary"
					onClick={() => handleSetMultiplier(m)}
					className={classNames(style.boardBtn, multiplier === m && style.active)}>
					{m}
				</Button>
			))}

			{/* <Button
				// className={`${style.boardBtn} ${multiplier === "D" ? style.active : ""}`}
				className={classNames(style.boardBtn, multiplier === "D" && style.active)}
				onClick={() => handleSetMultiplier("D")}
				theme="secondary">
				D
			</Button>

			<Button
				className={`${style.boardBtn} ${multiplier === "T" ? style.active : ""}`}
				onClick={() => handleSetMultiplier("T")}
				theme="secondary">
				T
			</Button> */}

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
