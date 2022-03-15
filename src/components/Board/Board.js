import { Button } from "../../components/Button/Button";
import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

import style from "./_board.module.css";

export function Board() {
	const gameState = useGameContext();
	const dispatch = useGameDispatch();

	const isDelButtonDisabled = gameState.historyHits[0].hits.length === 0;

	//@TODO Refactor into two actions not four
	let historyHitsLength =
		gameState.historyHits[gameState.historyHits.length - 1].hits.length;
	const addHitValue = (value) => {
		dispatch({
			type: "ADD_HIT",
			payload: value,
		});
	};

	const removeHitValue = () => {
		if (historyHitsLength > 0) {
			dispatch({
				type: "REMOVE_HIT",
			});
		}

		if (historyHitsLength === 0) {
			dispatch({
				type: "PREV_PLAYER",
			});
		}
	};

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

			<Button className={style.boardBtn} theme="secondary">
				D
			</Button>

			<Button className={style.boardBtn} theme="secondary">
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
