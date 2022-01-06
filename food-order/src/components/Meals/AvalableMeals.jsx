import React from "react";
import Card from "../UI/Card";
import classes from "./AvalableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "1",
		name: "Sushi",
		description: "Finest fish and veggies",
		price: 22.99,
	},
	{
		id: "2",
		name: "Schnitzel",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "3",
		name: "Barbecue Burger",
		description: "American, raw, meaty",
		price: 12.99,
	},
	{
		id: "4",
		name: "Green Bowl",
		description: "Healthy...and green...",
		price: 18.99,
	},
];

function AvalableMeals() {
	const mealsList = DUMMY_MEALS.map((meal) => {
		return (
			<MealItem
				key={meal.id}
				name={meal.name}
				id={meal.id}
				description={meal.description}
				price={meal.price}
				id={meal.id}
			/>
		);
	});

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
}

export default AvalableMeals;
