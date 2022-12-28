import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import {sendRequest} from "../helpers"

import {API_URL} from "../configs/API";

const initialState = {
    todos: []
}

export const actionFetchCards = createAsyncThunk("todos/fetchCards",async () => {
    const response = await sendRequest(`${API_URL}/products`)
    console.log(response);
    return response
})

export const actionCardPages = createAsyncThunk("todos/fetchCards",async () => {
    const response = await sendRequest(`${API_URL}/edit/:productID`)
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