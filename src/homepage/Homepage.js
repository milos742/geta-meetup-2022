import ListOfGames from "../games/ListOfGames";
import ChoosePlayer from "../choosePlayer/ChoosePlayer";
import StartGame from "./startGame/StartGame";

/**
 * Homepage component
 *
 * Display start screen and list all available games
 */
const Homepage = () => {
	return (
		<>
			<ChoosePlayer/>
			<ListOfGames />
			<StartGame/>
		</>
	);
};

export default Homepage;
