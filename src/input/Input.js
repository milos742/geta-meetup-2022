import { useRef } from "react";

const Input = (props) => {
	const { cssClass, type, placeholder, onChange, reference } = props;
	const inputRef = useRef();
	return (
		<input
			className={`${cssClass.inputClass} ${
				cssClass.errorClass ? cssClass.errorClass : ""
			}`}
			type={type}
			placeholder={placeholder}
			ref={inputRef}
			onChange={(e) => onChange(e)}
		/>
	);
};

export default Input;
