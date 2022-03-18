import avatarWinner from "../../assets/icons/avatar--big.svg";
import avatar from "../../assets/icons/avatar.svg";
import { Button } from "../Button/Button";

import style from "./_avatar.module.css";
import classNames from "classnames";

export function Avatar({ label, winner = false, onClick, className }) {
	className = classNames(style.avatar, className, { [style.winner]: winner === true });

	return (
		<div className={className}>
			<img src={winner ? avatarWinner : avatar} alt="avatar" />
			<p>{label}</p>
			{onClick && (
				<Button onClick={onClick} className={style.removeBtn} theme="remove">
					+
				</Button>
			)}
		</div>
	);
}
