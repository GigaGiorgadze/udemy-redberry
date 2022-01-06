import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
	const ctx = useContext(CartContext);

	const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
	const hasItems = ctx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		ctx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		ctx.addItem({ ...item, amount: 1 });
	};

	return (
		<Modal hideCartHandler={props.hideCartHandler}>
			<ul className={classes["cart-items"]}>
				{ctx.items.map((item) => {
					return (
						<CartItem
							amount={item.amount}
							key={item.id}
							name={item.name}
							price={item.price}
							onRemove={cartItemRemoveHandler.bind(null, item.id)}
							onAdd={cartItemAddHandler.bind(null, item)}
						/>
					);
				})}
			</ul>
			<div className={classes.total}>
				<span>Total amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button
					onClick={props.hideCartHandler}
					className={classes["button--alt"]}
				>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
}

export default Cart;
