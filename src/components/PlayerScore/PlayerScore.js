import {
	useEffect,
	useRef,
} from "react";

import dart from "../../assets/icons/dart.svg";
import { Avatar } from "../Avatar/Avatar";
import style from "./_playerScore.module.css";

export function PlayerScore({ hits, player, isActive }) {
	
	const playerRef = useRef(null)

	useEffect(() => {
		if (isActive) {
		}
		playerRef.current.scrollIntoView({ behavior: "smooth" });
	
	}, [isActive]);

	return (
		<div ref={playerRef} className={isActive ? style.active : style.playerTable}>
			<Avatar label={player.name} className={style.player} />
			<div className={style.hitsWrapper}>

				<div className={style.hitsRow}>
					<div className={style.arrow}>
						<img src={dart} alt=""/>
					</div>
					<div className={style.arrow}>
						<img src={dart} alt=""/>
					</div>
					<div className={style.arrow}>
						<img src={dart} alt=""/>
					</div>
				</div>

				<div className={style.hitsRow}>
					{hits.map((hit,i) => (
						<div key={i} className={style.hit}>
							{hit}
						</div>
					))}
				</div>
			</div>

			<div className={style.totalScore}>
				<span>
					{player.score}
				</span>
			</div>
		</div>
	);
}
