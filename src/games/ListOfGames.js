import { useState } from "react";
import SingleGame from "./singleGame/SingleGame";
import { useMyContext } from "../hooks/UseMyContext";

/**
 * Component list of all games
 *
 * @returns List of games
 */
const ListOfGames = () => {
	const allGames = ["501", "301"];

	const {
		game: { getGame, setGame },
	} = useMyContext();

	const handleSetGame = (data) => {
		if (data !== getGame) {
			setGame(data);
			console.log("Click", data);
		}
	};

	const mapAllGames = allGames.map((game, i) => {
		const uniq = "id-" + i;

		return (
			<div className="col-6" key={uniq}>
				<SingleGame
					game={game}
					handleSetGame={handleSetGame}
					getGame={getGame}
				/>
			</div>
		);
	});

	return (
		<div className="row">
			<div className="col-12 games">
				<p>Choose Game:</p>
			</div>

			{mapAllGames}
		</div>
	);
};

export default ListOfGames;
