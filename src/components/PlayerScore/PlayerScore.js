import { Avatar } from "../Avatar/Avatar";
import { Row } from "../Row/Row";
import dart from "../../assets/icons/dart.svg"

import style from "./_playerScore.module.css"

export function PlayerScore({ hit, currentScore, player, ...rest }) {
	const hits = [14, 16, 22];
	console.log(player);
	return (
		<Row className={style.playerScore}>
			<Avatar label={player.name} className={style.player} />
			<Row>
				{hits.map((hit,i) => (
					<div key={i} className={style.dart}>
						<span>
							<img src={dart} alt=""/>
						</span>
						<span>{hit}</span>
					</div>
				))}
			</Row>
			<div>
				<span>
					301
					{/* {currentScore} */}
				</span>
			</div>
		</Row>
	);
}
