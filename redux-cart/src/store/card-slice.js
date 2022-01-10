import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./UI";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuanitity: 0,
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuanitity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					price: newItem.price,
					quanity: 1,
					totalPrice: newItem.price,
					name: newItem.title,
				});
			} else {
				existingItem.quanity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload.id;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem.quanity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
				existingItem.quanity--;
			} else {
				existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
				existingItem.quanity--;
			}
		},
	},
});

export const sendCartdata = (cart) => {
	return async (dispatch) => {
		dispatch(
			uiActions.showNotification({
				status: "pending",
				title: "Sending...",
				message: "Sending cart data!",
			})
		);

		const sendRequest = async () => {
			const response = await fetch(
				"https://react-http-9c241-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);

			if (!response.ok) {
				throw new Error("Sending cart data failed.");
			}
		};

		try {
			await sendRequest();
			dispatch(
				uiActions.showNotification({
					status: "success",
					title: "Success!",
					message: "Sent cart data successfully!",
				})
			);
		} catch (error) {
			dispatch(
				uiActions.showNotification({
					status: "error",
					title: "Error!",
					message: "Sending cart data failed!",
				})
			);
		}
	};
};

export const cartActions = cartSlice.actions;

export default cartSlice;
