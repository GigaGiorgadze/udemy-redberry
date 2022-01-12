import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const cartContent = useSelector((state) => state.cart.items);
	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartContent.map((item) => (
					<CartItem
						item={{
							title: item.name,
							quantity: item.quanity,
							total: item.totalPrice,
							price: item.price,
							key: item.id,
							id: item.id,
						}}
					/>
				))}
			</ul>
		</Card>
	);
};

export default Cart;
