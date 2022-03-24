import {
	useEffect,
	useRef,
} from "react";

import classNames from "classnames";

import dart from "../../assets/icons/dart.svg";
import { Avatar } from "../Avatar/Avatar";
import style from "./_playerScore.module.css";

export function PlayerScore({ hits, player, isActive }) {
	const playerRef = useRef(null);
	
	const playerClassName = classNames(style.playerTable, {
		[style.active]: isActive,
	});

	useEffect(() => {
		if (isActive) {
			playerRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [isActive]);

	return (
		<div ref={playerRef} className={playerClassName}>
			<div className={style.playerTableSide}>
				<Avatar label={player.name} className={style.player} />
			</div>
			<div className={style.hitsWrapper}>

				<div className={style.hitsRow}>
					<div className={style.arrow}>
						<img src={dart} alt={dart}/>
					</div>
					<div className={style.arrow}>
						<img src={dart} alt={dart}/>
					</div>
					<div className={style.arrow}>
						<img src={dart} alt={dart}/>
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

			<div className={style.playerTableSide}>
				<span className={style.totalScore}>
					{player.score}
				</span>
			</div>
		</div>
	);
}
