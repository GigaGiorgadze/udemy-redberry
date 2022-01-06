import React from "react";

import MealImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={props.showCartHandler} />
			</header>
			<div className={classes["main-image"]}>
				<img src={MealImg} alt="A table full of food!" />
			</div>
		</>
	);
}

export default Header;
