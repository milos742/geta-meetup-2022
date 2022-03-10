
import { Logo } from "../../components/Logo/Logo";
import style from "./_start.module.css";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { Link } from "react-router-dom";
import { useGameContext, useGameDispatch } from "../../components/GameProvider/GameProvider";
import { useRef } from "react";

export function Start() {
	const dispatch = useGameDispatch();
	const inputRef = useRef();
	const gameState = useGameContext();

	const games = ['301', '501'];

	const handlePlayerAdd = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_PLAYER',
			payload: inputRef.current.value
		})
	}

	const handlePlayerRemove = (data) => {
		dispatch({
			type: 'REMOVE_PLAYER',
			payload: data
		})
	}

	const handleSetGame = (data) => {
		if (data !== gameState.selectedGame) {
			dispatch({
				type: 'SET_GAME',
				payload: data
			})
		}
	}


	return (
		<div className={style.start}>
			<Logo />
			<form className={style.inputWrapper}>
				<Input
					placeholder={"Choose player"}
					label="Add players:"
					name='player'
					ref={inputRef}
				/>

				<Button className={style.btnAddPlayer} onClick={handlePlayerAdd}>
					+
				</Button>

			</form>

			<div>
				{
					Object.values(gameState.players).map((player) => (
						<button
							onClick={() => handlePlayerRemove(player.id)}
							key={player.id}>
							{player.name}
						</button>
					))
				}
			</div>

			<h2>Choose game:</h2>
			<div className={style.inputWrapper}>

				{games.map(g =>
					<Button
						key={g}
						className={`${style.btn} ${g === gameState.selectedGame && style.selected}`}
						type={g !== gameState.selectedGame ? "secondary" : "primary"}
						onClick={() => handleSetGame(g)}>
						{g}
					</Button>
				)}

			</div>

			<Link to={`/game`} className={style.link}>
				start
			</Link>
		</div>
	);
}
