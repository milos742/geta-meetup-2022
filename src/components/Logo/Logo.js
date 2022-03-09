import logo from "../../assets/logo.svg";
import style from "./_logo.module.css";

export function Logo(props) {
	return (
		<div className={style.logo}>
			<img src={logo} />
		</div>
	);
}
