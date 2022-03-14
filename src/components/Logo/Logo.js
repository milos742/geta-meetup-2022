import logo from "../../assets/geta-logo--white.svg";
import style from "./_logo.module.css";

import classNames from "classnames";

export function Logo({ className, ...rest }) {

	className = classNames(style.logo, className);

	return (
		<div className={className} {...rest}>
			<img src={logo} alt="logo" />
		</div>
	);
}
