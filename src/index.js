//eslint-disable @typescript-eslint/no-unused-vars
import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App.jsx";
import "./home_view/styles/components/general.css";
import { ContextProvider } from "./context/Context";

ReactDOM.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
