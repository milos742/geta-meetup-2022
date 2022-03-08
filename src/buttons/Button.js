import { Link } from "react-router-dom";

const Button = (props) => {
	const { href, style, text, disabled, cssClass, onClick } = props;
	const buttonClass = "button";
	const buttonDisabled = buttonClass + "--disabled";

	const combineClasses = `${buttonClass} ${cssClass ? cssClass : ""} ${
		disabled ? buttonDisabled : ""
	}`;

	console.log(disabled);
	const createButton = (href, style, text, disabled, cssClass, onClick) => {
		if (href !== "") {
			return (
				<Link to={`${href}`} style={style} className={combineClasses}>
					{text}
				</Link>
			);
		} else {
			return (
				<button
					className={combineClasses}
					style={style}
					onClick={onClick}
				>
					{text}
				</button>
			);
		}
	};

	return createButton(href, style, text, disabled, cssClass, onClick);
};

export default Button;
