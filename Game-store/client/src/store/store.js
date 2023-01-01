import { configureStore } from "@reduxjs/toolkit";

import {
	favoriteReducer,
	todoReducer,
	basketReducer,
	modalReducer,
	categoriesReducer,
} from "../reducers";

const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		todos: todoReducer,
		basket: basketReducer,
		modal: modalReducer,
		category: categoriesReducer,
	},
});

export default store;
