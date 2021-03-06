import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		totalQuanitity: 0,
		changed: false,
	},
	reducers: {
		replaceCart(state, action) {
			state.totalQuanitity = action.payload.totalQuanitity;
			state.items = action.payload.items;
		},
		addItemToCart(state, action) {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuanitity++;
			state.changed = true;
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
			state.changed = true;
			state.totalQuanitity--;
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

export const cartActions = cartSlice.actions;

export default cartSlice;
