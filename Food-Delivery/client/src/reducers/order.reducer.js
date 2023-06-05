import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../configs/API";

const initialState = {
	orders: [],
	isLoading: false,
	error: null,
};

export const createOrder = createAsyncThunk(
	"order/createOrder",
	async (orderData) => {
		try {
			const response = await axios.post(`${API_URL}/orders`, orderData);
			return response.data;
		} catch (error) {
			throw new Error(console.log(error.message));
		}
	}
);

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
	try {
		const response = await axios.get(`${API_URL}/orders`);

		return response.data;
	} catch (error) {
		throw new Error(console.log(error.message));
	}
});

const orderReducer = createSlice({
	name: "orders",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchOrders.pending, (state) => {
			state.isLoading = true;
			state.orders = [];
		});
		builder.addCase(fetchOrders.fulfilled, (state, { payload }) => {
			state.orders = payload;
			state.isLoading = false;
		});
	},
});

export default orderReducer.reducer;
