import classNames from "classnames";

import style from "./_button.module.css";

export function Button({ children, className, theme = "primary", ...rest }) {
	className = classNames(style.btn, className, {
		[style.primary]: theme === "primary",
		[style.secondary]: theme === "secondary",
		[style.remove]: theme === "remove",
	});

	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
}
