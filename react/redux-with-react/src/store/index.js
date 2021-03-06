import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		},
	},
});

const initalAuthState = {
	isAuthed: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState: initalAuthState,
	reducers: {
		login(state) {
			state.isAuthed = true;
		},
		logout(state) {
			state.isAuthed = false;
		},
	},
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
