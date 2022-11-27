import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {sendRequest} from "../helpers"

const initialState = {
    todos: []
}

export const actionFetchCards = createAsyncThunk("todos/fetchCards",async (article) => {
    const response = await sendRequest(`${window.location.origin}/./data.json`)
    return response
})

const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actionFetchCards.fulfilled,(state,{payload})=> {
            state.todos = payload
        })
    }
})

export default todoReducer.reducer