import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
var items = cartCtx.items

	async function orderHandler() {
		try {
			const response = await fetch(
				"https://react-http-9c241-default-rtdb.europe-west1.firebasedatabase.app/meals.json", {
          method: "post",
          body: JSON.stringify(cartCtx.items),
          headers: {
            "Content-Type" : "application/json"
          }
        }
			);

			// const data = await response.json();

			// const loadedMeals = [];

			// for (const key in data) {
			// 	loadedMeals.push({
			// 		id: key,
			// 		name: data[key].name,
			// 		description: data[key].description,
			// 		price: data[key].price,
			// 	});
			// }
			// console.log(data);

			// setMeals(loadedMeals);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<Modal onClose={props.onClose}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && (
					<button onClick={orderHandler} className={classes.button}>
						Order
					</button>
				)}
			</div>
		</Modal>
	);
};

export default Cart;
