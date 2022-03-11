import classNames from "classnames";

import style from "./_button.module.css";

export function Button({children, className, type = 'primary', ...rest}) {

	className = classNames(style.btn, className,
		{
			[style.primary] : type === 'primary',
			[style.secondary] : type === 'secondary',
			[style.remove] : type === 'remove'
		}
	);

	return (
		<button className={className} {...rest}>
			{children}
		</button>
	);
}
