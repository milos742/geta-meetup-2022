import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import style from "./_addPlayer.module.css"

export function AddPLayer() {
	return (
		<div className={style.input_wrapper}>
			<Input
				placeholder={"Choose player"}
				label="Add players:"
				style={{ color: "red", padding: "40px" }}
			/>
			<Button text="+" type="circle" />
		</div>
	);
}
