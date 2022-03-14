import { useState } from "react";
import { Avatar } from "../../components/Avatar/Avatar";
import { Button } from "../../components/Button/Button";
import { Input } from "../Input/Input";

import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";

import style from "./_addPlayer.module.css";
import { Row } from "../Row/Row";

export function AddPlayer() {
	const [inputVal, setInputVal] = useState("");

	const dispatch = useGameDispatch();
	const gameState = useGameContext();

	const handlePlayerAdd = (event) => {
		event.preventDefault();
		dispatch({
			type: "ADD_PLAYER",
			payload: inputVal,
		});
		setInputVal("");
	};

	const handlePlayerRemove = (playerId) => {
		dispatch({
			type: "REMOVE_PLAYER",
			payload: playerId,
		});
	};

	return (
		<>
			<form className={style.inputWrapper}>
				<Input
					placeholder={"Type name"}
					label="Add players:"
					name="player"
					// ref={inputRef}
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>

				<Button
					disabled={!inputVal}
					className={style.btnAddPlayer}
					onClick={handlePlayerAdd}>
					+
				</Button>
			</form>

			<ul className={style.avatarWrapper}>
				{Object.values(gameState.players).map((player) => (
					<li key={player.id} className={style.avatarItem}>
						<Avatar
							label={player.name}
							onClick={() => handlePlayerRemove(player.id)}
						/>
					</li>
				))}
			</ul>
		</>
	);
}
