import { Button } from "../../components/Button/Button";
import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { Row } from "../../components/Row/Row";
import { targets } from "../../utils/constants";
import style from "./_board.module.css";

export function Board() {
	const gameState = useGameContext();
	const dispatch = useGameDispatch();
	
	const isDelButtonDisabled = !!gameState.historyHits && gameState.historyHits.length > 0;

    const addHitValue = (value) => {
		dispatch({
			type: "ADD_HIT",
			payload: value,
		});
    }

    const removeHitValue = () => {
		dispatch({
			type: "REMOVE_HIT",
		});
    }

	return (
		<Row className={style.board}>
			{targets.map((value) => (
				<Button 
					key={value}
                    className={style.boardBtn} 
                    theme="secondary"
					onClick={() => addHitValue(value)}
				>
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
				disabled={!isDelButtonDisabled}
			>
				DEL
			</Button>
		</Row>
	);
}
