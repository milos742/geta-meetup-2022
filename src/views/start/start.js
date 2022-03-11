import {
	useRef,
	useState,
} from "react";

import classNames from "classnames";
import { Link } from "react-router-dom";

import { Avatar } from "../../components/Avatar/Avatar";
import { Button } from "../../components/Button/Button";
import {
	useGameContext,
	useGameDispatch,
} from "../../components/GameProvider/GameProvider";
import { Input } from "../../components/Input/Input";
import { Logo } from "../../components/Logo/Logo";
import { games } from "../../utils/constants";
import style from "./_start.module.css";

export function Start() {
	const inputRef = useRef();
	const dispatch = useGameDispatch();
	const gameState = useGameContext();

	const [inputVal, setInputVal] = useState('');

	const isLinkDisabled = Object.values(gameState.players).length >= 2 && !!gameState.selectedGame;
	
	const linkClassName = classNames(style.link,
		{[style.linkDisabled] : !isLinkDisabled });

	const handlePlayerAdd = (event) => {
		event.preventDefault();
		dispatch({
			type: 'ADD_PLAYER',
			payload: inputRef.current.value
		});
		setInputVal(!inputVal);
		inputRef.current.value = '';
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
					value={inputVal}
					onChange={e => setInputVal(e.target.value)}
				/>

				<Button 
					disabled={!inputVal}
					className={style.btnAddPlayer}
					onClick={handlePlayerAdd}
				>
					+
				</Button>

			</form>

			<ul className={style.avatarWrapper}>
				{
					Object.values(gameState.players).map((player) => (
						<li>
						<Avatar
							key={player.id}
							label={player.name}
							onClick={() => handlePlayerRemove(player.id)}
						/>

						</li>
					))
				}
			</ul>

			<h2>Choose game:</h2>
			<div className={style.inputWrapper}>

				{Object.values(games).map(g =>
					<Button
						key={g}
						className={`${style.btn} ${g === gameState.selectedGame && style.selected}`}
						type={g !== gameState.selectedGame ? "secondary" : "primary"}
						onClick={() => handleSetGame(g)}>
						{g}
					</Button>
				)}

			</div>

			{/* <Link to={`/game`} className={linkClassName}> */}
			<Link to={`/result`} className={linkClassName}>
				start
			</Link>
		</div>
	);
}
