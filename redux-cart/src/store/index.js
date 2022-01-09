import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./card-slice";
import uiSlice from "./UI";

const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		cart: cartSlice.reducer,
	},
});

export default store;
