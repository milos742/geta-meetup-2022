// import { Link } from "react-router-dom";
import Button from "../../buttons/Button";
import { useMyContext } from "../../hooks/UseMyContext";

const StartGame = (props) => {
	const { isDisabled } = props;

	const {
		settings: { getSettings },
	} = useMyContext();

	return (
		<div className="row">
			<div className="col-12">
				<Button
					href="/board"
					style={{
						width: "100%",
						borderRadius: "25px",
						display: "block",
						minHeight: "50px",
					}}
					disabled={getSettings}
					cssClass="button--start"
					text={"start"}
				/>
			</div>
		</div>
	);
};

export default StartGame;
