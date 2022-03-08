import Button from "../../buttons/Button";
import Input from "../../input/Input";

import { useContext, useState, useRef } from "react";
import ContextProvider from "../../contexts/ContextProvider";

/**
 * This is SinglePlayerInput component
 *
 * it is responsible for Adding a new player
 *
 * @param {Object} props
 * @returns
 */
const SinglePlayerInput = (props) => {
	const baseClassName = "player";
	const inputClassName = `${baseClassName}__input`;
	const labelClassName = `${baseClassName}__label`;
	const textClassName = `${baseClassName}__label-text`;
	const errorClass = `${baseClassName}--error`;

	const inputRef = useRef();

	const {
		players: { getPlayers, setPlayers },
	} = useContext(ContextProvider);

	const [error, setError] = useState(false);

	const handleSetPlayers = (e) => {
		let inputValue = inputRef.current.value;

		if (inputValue !== "") {
			console.log("Set name: ", inputRef);
			setPlayers([...getPlayers, inputValue]);
			inputRef.current.value = "";
		} else {
			setError(true);
		}
	};

	const handleNameChange = (e) => {
		if (e.target.value !== "") {
			setError(false);
		}
	};

	return (
		<div className={baseClassName + " col-12"}>
			<label className={`${labelClassName}`}>
				<span className={textClassName}>Add player</span>
				<input
					className={`${inputClassName} ${error ? errorClass : ""}`}
					type="text"
					placeholder="Player name..."
					ref={inputRef}
					onChange={(e) => handleNameChange(e)}
				/>
			</label>

			<Button
				href=""
				style={{
					width: "50px",
					height: "50px",
					borderRadius: "25px",
					display: "block",
				}}
				text={"+"}
				onClick={(e) => handleSetPlayers()}
			/>
		</div>
	);
};

export default SinglePlayerInput;
