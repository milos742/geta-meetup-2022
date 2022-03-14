import style from "./_row.module.css";
import classNames from "classnames";

export function Row({ children, className, ...rest }) {
    
	className = classNames(style.container, className);

	return (
		<div className={className} {...rest}>
			{children}
		</div>
	);
}
