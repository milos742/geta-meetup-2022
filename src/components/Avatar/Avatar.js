import winner from "../../assets/icons/avatar--winner";
import avatar from "../../assets/icons/avatar";

import style from "./_avatar.module.css";

export function Avatar(props) {
	const { name, type } = props;

	return (
		<div>
			<div>
				{type && type === "winner" ? (
					<img src={winner} />
				) : (
					<img src={avatar} />
				)}
			</div>

			<div>
				<p>{name?.name}</p>
			</div>
		</div>
	);
}
