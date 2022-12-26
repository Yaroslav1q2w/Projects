import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isModal: false,
        pageForm: false,
        modalSubmit: false
    },
    reducers: {
        modalOpen(state) {
            state.isModal = true
        },
        modalClose(state) {
            state.isModal = false
        },
        formOpen(state) {
            state.pageForm = true
        },
        formClose(state) {
            state.pageForm = false
        },
        modalSubmitOpen(state) {
            state.modalSubmit = true
        },
        modalSubmitClose(state) {
            state.modalSubmit = false
        },
    },
})

export const {modalOpen,modalClose,formOpen,formClose,modalSubmitOpen,modalSubmitClose} = modalSlice.actions
export default modalSlice.reducer