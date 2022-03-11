import avatarWinner from "../../assets/icons/avatar--big.svg";
import avatar from "../../assets/icons/avatar.svg";
import style from "./_avatar.module.css";

export function Avatar({label, winner = false}) {

	const imgSrc = winner ? avatarWinner : avatar

	return (
		<div className={style.avatar}>
			<img src={imgSrc} />
			<p>{label}</p>
		</div>
	);
}
