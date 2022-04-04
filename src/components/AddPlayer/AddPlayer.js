import { memo, useState } from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

import { Avatar } from "../../components/Avatar/Avatar";
import { Button } from "../../components/Button/Button";
import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";
import { Input } from "../Input/Input";
import style from "./_addPlayer.module.css";

const PlayerList = ({ players, onRemove }) => (
	<ul className={style.avatarWrapper}>
		{Object.values(players).map((player) => (
			<li key={player.id} className={style.avatarItem}>
				<Avatar label={player.name.toLowerCase()} onClick={() => onRemove(player.id)} />
			</li>
		))}
	</ul>
);

const PlayerListMemo = memo(PlayerList);

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

	const arePlayersAdded = !!Object.values(gameState.players).length;

	return (
		<>
			<form className={style.inputWrapper}>
				<Input
					maxLength="7"
					name="player"
					value={inputVal}
					label="Add players:"
					placeholder="Type name"
					onChange={(e) => setInputVal(e.target.value)}
				/>

				<Button
					disabled={!inputVal}
					className={style.btnAddPlayer}
					onClick={handlePlayerAdd}></Button>
			</form>

			{arePlayersAdded && (
				<PlayerListMemo players={gameState.players} onRemove={handlePlayerRemove} />
			)}
		</>
	);
}
