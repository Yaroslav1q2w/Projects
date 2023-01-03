import { configureStore } from "@reduxjs/toolkit";

import {
	favoriteReducer,
	todoReducer,
	basketReducer,
	modalReducer,
	filterReducer,
} from "../reducers";

const store = configureStore({
	reducer: {
		favorite: favoriteReducer,
		todos: todoReducer,
		basket: basketReducer,
		modal: modalReducer,
		filter: filterReducer,
	},
});

export default store;
