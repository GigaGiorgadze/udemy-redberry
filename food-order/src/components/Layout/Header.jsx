import React from "react";

import MealImg from "../../assets/meals.jpg";

import classes from "./Header.module.css";

function Header(props) {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<button>Cart</button>
			</header>
			<div className={classes["main-image"]}>
				<img src={MealImg} alt="A table full of food!" />
			</div>
		</>
	);
}

export default Header;
