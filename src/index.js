import { StrictMode } from "react";
import {createRoot} from 'react-dom/client';
import "./index.sass";
import App from "./App";

const root = document.getElementById("root");

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
