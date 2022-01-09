import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.showCounter);

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	};

	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	};

	const incrementByFiveHandler = () => {
		dispatch(counterActions.increase(5));
	};

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

  

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementByFiveHandler}>increment by five</button>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
