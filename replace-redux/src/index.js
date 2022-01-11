import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsProducer from "./context/products-contentx";


ReactDOM.render(
	<ProductsProducer>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ProductsProducer>,
	document.getElementById("root")
);
