import { Route, Routes } from "react-router-dom";

import Home from "../homepage/Homepage";
import Board from "../board/Board";

const Main = () => {
	return (
		<main>
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/board" element={<Board />} />
				</Routes>
			</div>
		</main>
	);
};

export default Main;
