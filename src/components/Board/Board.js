import { Button } from "../../components/Button/Button";
import { Row } from "../../components/Row/Row";
import style from "./_board.module.css";
import { targets } from "../../utils/constants";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

export function Board() {
	const gameContext = useGameContext();
	const dispatch = useGameDispatch();

    const setHit = (score) => {

    }

    const  setMultiplier = (multiplier) => {

    } 

    const setUndo = () => {

    }

	return (
		<Row className={style.board}>
			{targets.map((value) => (
				<Button 
                    className={style.boardBtn} 
                    theme="secondary">
					{value}
				</Button>
			))}

			<Button className={style.boardBtn} theme="secondary">
				D
			</Button>

			<Button className={style.boardBtn} theme="secondary">
				T
			</Button>

			<Button className={style.boardBtn} theme="secondary">
				DEL
			</Button>
		</Row>
	);
}
