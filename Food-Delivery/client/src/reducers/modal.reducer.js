import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isModal: false,
	pageForm: false,
	modalSubmit: false,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		modalOpen(state) {
			state.isModal = true;
		},
		modalClose(state) {
			state.isModal = false;
		},
		formOpen(state) {
			state.pageForm = true;
		},
		formClose(state) {
			state.pageForm = false;
		},
		modalSubmitOpen(state) {
			state.modalSubmit = true;
		},
		modalSubmitClose(state) {
			state.modalSubmit = false;
		},
	},
});

export const {
	modalOpen,
	modalClose,
	formOpen,
	formClose,
	modalSubmitOpen,
	modalSubmitClose,
} = modalSlice.actions;
export default modalSlice.reducer;
