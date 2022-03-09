import style from "./_input.module.css";

export function Input(props) {
	const { placeholder, callback, type, label } = props;
	if (label !== "") {
		return (
			<label className={style.label}>
				<span className={style.label_text}>{label}</span>
				<br />
				<input
					className={style.input}
					type={type}
					placeholder={placeholder}
					onChange={callback}
				/>
			</label>
		);
	} else {
		return (
			<input
				className={style.input}
				type={type}
				placeholder={placeholder}
				onChange={callback}
			/>
		);
	}
}
