import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers";

import { API_URL } from "../configs/API";

const initialState = {
	todos: [],
	isLoading: true,
};

export const actionFetchCards = createAsyncThunk(
	"todos/fetchCards",
	async (category) => {
		const response = await sendRequest(`${API_URL}/products?${category}`);
		return response;
	}
);

const todoReducer = createSlice({
	name: "todos",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(actionFetchCards.pending, (state) => {
			state.isLoading = true;
			state.todos = [];
		});
		builder.addCase(actionFetchCards.fulfilled, (state, { payload }) => {
			state.todos = payload;
			state.isLoading = false;
		});
	},
});

export default todoReducer.reducer;

export const { chengeCategory } = todoReducer.actions;
