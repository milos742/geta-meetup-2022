import style from "./_button.module.css";

export function Button(props) {
	const { text, callback, type } = props;

	return (
		<button
			className={
				type === "circle"
					? `${style.btn} ${style.btn_circle}`
					: `${style.btn} ${style.btn_primary}`
			}
			onClick={callback}>
			{text}
		</button>
	);
}
