import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./views/start/start";
import { Result } from "./views/result/result";
import { Game } from "./views/game/game";
import "./theme.css";
import "./index.css";
import { GameProvider } from "./components/GameProvider/GameProvider";

function App() {
	return (
		<div className="App">
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
