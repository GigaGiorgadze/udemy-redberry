import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/UI";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatch = useDispatch();
	const cartQuanitity = useSelector((state) => state.cart.totalQuanitity);

	const toggleCartHandler = () => {
		dispatch(uiActions.toggle());
	};

	return (
		<button className={classes.button} onClick={toggleCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{cartQuanitity}</span>
		</button>
	);
};

export default CartButton;
