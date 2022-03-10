import React from "react";
import style from "./_input.module.css";

function InputFC(props, ref) {
	const { placeholder, onChange, type, label } = props;

	if (label && label !== "") {
		return (
			<label className={style.label}>
				<span className={style.label_text}>{label}</span>
				<br />
				<input
					className={style.input}
					type={type}
					ref={ref}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</label>
		);
	} else {
		return (
			<input
				className={style.input}
				type={type}
				ref={ref}
				placeholder={placeholder}
				onChange={onChange}
			/>
		);
	}
}

export const Input = React.forwardRef(InputFC);
