import "./theme.css";
import "./index.css";

import {
	BrowserRouter,
	Route,
	Routes,
} from "react-router-dom";

import style from "./_app.module.css";
import { GameProvider } from "./components/GameProvider/GameProvider";
import { Game } from "./views/game/game";
import { Result } from "./views/result/result";
import { Start } from "./views/start/start";

function App() {
	return (
		<div className={style.app}>
			<GameProvider>
				<BrowserRouter>
					<Routes>
						<Route path={`/`} element={<Start />} />
						<Route path={`/game`} element={<Game />} />
						<Route path={`/result`} element={<Result />} />
					</Routes>
				</BrowserRouter>
			</GameProvider>
		</div>
	);
}

export default App;
