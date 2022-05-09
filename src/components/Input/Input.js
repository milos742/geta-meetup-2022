import React from 'react';

import style from './_input.module.css';

function InputFC({ label, name, ...rest }, ref) {

	return (
		<>
			{label && (
				<label className={style.label} htmlFor={name}>
					{label}
				</label>
			)}

			<input id={name} ref={ref} name={name} {...rest} className={style.input} />
		</>
	);
}

export const Input = React.forwardRef(InputFC);
