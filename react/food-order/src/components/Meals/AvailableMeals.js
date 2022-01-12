import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import { useEffect, useCallback, useState } from "react";

const mealsArray = [];

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	const fetchMeals = useCallback(async () => {
		try {
			const response = await fetch(
				"https://react-http-9c241-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
			);

			const data = await response.json();

			const loadedMeals = [];

			for (const key in data) {
				loadedMeals.push({
					id: key,
					name: data[key].name,
					description: data[key].description,
					price: data[key].price,
				});
			}
			console.log(data);

			setMeals(loadedMeals);
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		fetchMeals();
	}, [fetchMeals]);

	return (
		<section className={classes.meals}>
			<Card>
				{meals.length > 0 &&
					meals.map((meal) => {
						return (
							<MealItem
								key={meal.id}
								id={meal.id}
								name={meal.name}
								description={meal.description}
								price={meal.price}
							/>
						);
					})}
			</Card>
		</section>
	);
};

export default AvailableMeals;
