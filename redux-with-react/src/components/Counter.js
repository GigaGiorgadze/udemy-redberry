import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch({ type: "increment" });
	};

	const decrementHandler = () => {
		dispatch({ type: "decrement" });
	};

	const incrementByFiveHandler = () => {
		dispatch({ type: "increase", value: 5 });
	};

	const toggleCounterHandler = () => {
		dispatch({ type: "toggle" });
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div>
				<button onClick={incrementByFiveHandler}>increment by five</button>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
