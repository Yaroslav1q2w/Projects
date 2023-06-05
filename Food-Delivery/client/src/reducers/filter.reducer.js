import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	categoryID: 0,
	pageCount: 1,
	currentLimit: 9,
};

export const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		chengeCategory(state, { payload }) {
			state.categoryID = payload;
		},
		setPageCount(state, { payload }) {
			state.pageCount = payload;
		},
	},
});

export const { chengeCategory, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
