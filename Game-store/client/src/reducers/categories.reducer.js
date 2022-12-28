import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        categoryID: 0
    },
    reducers: {
        chengeCategory(state,{payload}) {
            state.categoryID = payload
        },
    },
})

export const {chengeCategory} = categoriesSlice.actions
export default categoriesSlice.reducer