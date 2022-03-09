import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import style from "./_start.module.css";

export function Start() {
	return (
		<div className={style.start}>
			<br />
			<Logo />
			<div className={style.input_wrapper}>
				<Input
					placeholder={"Choose player"}
					label="Add players:"
					style={{ color: "red" }}
				/>
				<Button text="+" />
			</div>
		</div>
	);
}
