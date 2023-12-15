import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../configs/API";

const initialState = {
	status: "idle",
};

// Створення замовлення та оновлення користувача
export const createOrder = createAsyncThunk(
	"user/createOrder",
	async ({ userId, products }, { rejectWithValue }) => {
		try {
			// Створити нове замовлення
			const newOrder = {
				products,
				orderDate: new Date(),
			};

			// Відправити нове замовлення на сервер
			const responseOrder = await axios.post(`${API_URL}/api/orders`, {
				userId,
				...newOrder,
			});

			console.log(responseOrder);

			// Оновити користувача, додавши замовлення до його списку
			const responseUser = await axios.put(
				`${API_URL}/api/customers/${userId}`,
				{ $push: { orders: responseOrder.data } }
			);

			return { order: responseOrder.data, updatedUser: responseUser.data };
		} catch (error) {
			return rejectWithValue(error.response.data);
		}
	}
);

const ordersReducer = createSlice({
	name: "orders",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder

			.addCase(createOrder.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(createOrder.fulfilled, (state, { payload }) => {
				state.status = "succeeded";
				state.user = payload.updatedUser;
			})
			.addCase(createOrder.rejected, (state, { payload }) => {
				state.status = "failed";
				state.error = payload;
			});
	},
});

export default ordersReducer.reducer;
