import logo from "../../assets/geta-logo--white.svg";
import style from "./_logo.module.css";

export function Logo(props) {
	return (
		<div className={style.logo}>
			<img src={logo} alt="logo" />
		</div>
	);
}
