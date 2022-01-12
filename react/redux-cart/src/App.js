import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartdata } from "./store/cart-actions";

let isInitial = true;

function App() {
	const showCart = useSelector((state) => state.ui.cartIsVisible);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.ui.notifications);

	useEffect(() => {
		if (isInitial) {
			dispatch(fetchCartData());
			isInitial = false;
			return;
		}

		if (cart.changed) {
			dispatch(sendCartdata(cart));
		}
	}, [cart, dispatch]);

	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
