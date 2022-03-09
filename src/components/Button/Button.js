import style from "./_button.module.css";

export function Button(props) {
	const { text, callback, type } = props;

	return (
		<button style={style.button} onClick={callback}>
			{text}
		</button>
	);
}
