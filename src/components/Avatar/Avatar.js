import avatarWinner from "../../assets/icons/avatar--big.svg";
import avatar from "../../assets/icons/avatar.svg";
import { Button } from "../Button/Button";
import style from "./_avatar.module.css";

export function Avatar({label, winner = false, onClick}) {

	const imgSrc = winner ? avatarWinner : avatar

	return (
		<div className={style.avatar}>
			<img src={imgSrc} alt='icon--avatar' />
			<p>{label}</p>
			<Button
				onClick={onClick}
				className={style.avatarRemoveBtn}
				type="remove">
			+
			</Button>
		</div>
	);
}
