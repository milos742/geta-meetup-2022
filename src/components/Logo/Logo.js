import classNames from 'classnames';

import logo from '../../assets/geta-logo--white.svg';
import style from './_logo.module.css';

export function Logo( className ) {

	className = classNames(style.logo, className);

	return (
		<div className={className}>
			<img src={logo} alt="logo" />
		</div>
	);
}
