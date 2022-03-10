import { AddPLayer } from "../../components/AddPlayer/AddPlayer";
import { Logo } from "../../components/Logo/Logo";
import style from "./_start.module.css";

export function Start() {
	return (
		<div className={style.start}>
			<br />
			<Logo />
			<AddPLayer/>
		</div>
	);
}
