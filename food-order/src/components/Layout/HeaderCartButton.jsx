import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
	const cartCtx = useContext(CartContext);
	const [btnIsBumped, setBtnIsBumped] = useState(false);

	const { items } = cartCtx;

	const numberOfCartItems = items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsBumped ? classes.bump : ""}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsBumped(true);

		const timer = setTimeout(() => {
			setBtnIsBumped(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button onClick={props.onClick} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
}

export default HeaderCartButton;
