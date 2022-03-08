import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./header/Header";
import Main from "./main/Main";
import "./scss/main.scss";

import ContextProvider from "./contexts/ContextProvider";
import { useMyContext } from "./hooks/UseMyContext";

const App = () => {
	// Get context for whole app
	const context = useMyContext();

	return (
		<BrowserRouter>
			<ContextProvider.Provider value={context}>
				<Header />
				<Main />
			</ContextProvider.Provider>
		</BrowserRouter>
	);
};

export default App;
