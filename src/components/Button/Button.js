import style from "./_button.module.css";
import classNames from "classnames";

export function Button({children, className, type = 'primary', ...rest}) {

	className = classNames(style.btn, className,
		{[style.primary] : type === 'primary', 
		[style.secondary] : type === 'secondary'},
	);

	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
}
