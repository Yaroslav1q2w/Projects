import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
	name: "filter",
	initialState: {
		searchValue: "",
		categoryID: 0,
	},
	reducers: {
		chengeCategory(state, { payload }) {
			state.categoryID = payload;
		},
		setFilters(state, { payload }) {
			state.categoryID = Number(payload.categoryID);
		},
	},
});

export const { chengeCategory, setFilters } = filterSlice.actions;
export default filterSlice.reducer;
