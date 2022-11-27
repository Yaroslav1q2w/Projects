import { configureStore } from '@reduxjs/toolkit'

import {favoriteReducer,todoReducer,basketReducer,modalReducer} from "../reducers"

const store = configureStore({
    reducer: {
        favorite: favoriteReducer,
        todos: todoReducer,
        basket: basketReducer,
        modal: modalReducer
    },
})

export default store