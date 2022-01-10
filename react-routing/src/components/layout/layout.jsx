import React from "react";
import classes from "./Layout.module.css";
import MainNavigiation from "./MainNavigiation";

function layout(props) {
	return (
		<>
			<MainNavigiation />
			<main className={classes.main}>{props.children}</main>
		</>
	);
}

export default layout;
