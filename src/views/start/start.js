import { Logo } from "../../components/Logo/Logo";
import { AddPlayer } from "../../components/AddPlayer/AddPlayer";
import { ChooseGame } from "../../components/ChooseGame/ChooseGame";
import { StartGame } from "../../components/StartGame/StartGame";

import style from "./_start.module.css";

export function Start() {
	return (
		<div className={style.start}>
			<Logo />
			<AddPlayer />
			<ChooseGame />
			<StartGame />
		</div>
	);
}
