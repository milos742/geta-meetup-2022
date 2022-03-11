import { Link } from "react-router-dom";

import { Avatar } from "../../components/Avatar/Avatar";
import { useGameContext } from "../../components/GameProvider/GameProvider";
import { Logo } from "../../components/Logo/Logo";
import style from "./_result.module.css";

export function Result() {
	const gameState = useGameContext();
		
	return <div className={style.result}>
		<Logo />

		<ul className={style.avatarWrapper}>
			{
				Object.values(gameState.players).map((player) => (
					<li>
						<Avatar
							key={player.id}
							label={player.name}
						/>
					</li>
				))
			}
		</ul>


		<Link to={`/`}>
				NEW GAME
			</Link>
	</div>
}
