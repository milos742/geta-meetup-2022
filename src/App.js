import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Start } from "./views/Start/Start";
import { Result } from "./views/Result/Result";
import { Game } from "./views/Game/Game";
import "./theme.css";
import "./index.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path={`/`} element={<Start />} />
					<Route path={`/game`} element={<Game />} />
					<Route path={`/result`} element={<Result />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
