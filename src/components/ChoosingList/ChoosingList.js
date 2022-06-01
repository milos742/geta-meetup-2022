import { Button } from "../Button/Button";

import style from "./_choosingList.module.css";

export function ChoosingList({ title, wrapperClassName, buttonClassName, item, onClick, selected }) {
	return (
		<div className={style.choosingList}>
			{title && <h2>{title}</h2>}
			<div className={wrapperClassName}>
				{Object.values(item).map((g) => (
					<Button
						key={g}
						className={buttonClassName}
						theme={g !== selected ? "secondary": "primary"}
						onClick={() => onClick(g)}>
						{g}
					</Button>
				))}
			</div>
		</div>
	)
}