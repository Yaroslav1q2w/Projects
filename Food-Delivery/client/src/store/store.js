import { configureStore } from "@reduxjs/toolkit";

import {
	todoReducer,
	basketReducer,
	modalReducer,
	filterReducer,
	orderReducer,
} from "../reducers";

const store = configureStore({
	reducer: {
		todos: todoReducer,
		basket: basketReducer,
		modal: modalReducer,
		filter: filterReducer,
		orders: orderReducer,
	},
});

export default store;
