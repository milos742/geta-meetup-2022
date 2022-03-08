/**
 * This is SingleAddedPlayer component
 *
 * This component is displayed in ChoosePLayer.js component
 * after more than one player is added to game
 *
 * It will also contain controll to remove it from added players []
 *
 * @param {Array} props.addedPlayers
 * @param {Function} props.removePLayer
 * @returns
 */
const SingleAddedPlayer = (props) => {
	// Desctructure props
	const { player } = props;
	return (
		<div className="player col-3">
			<div className="player__avatar"></div>
			<div className="player__remove-button"></div>
			<p>{player}</p>
		</div>
	);
};

export default SingleAddedPlayer;
