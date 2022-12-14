import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
    name: 'category',
    initialState: {
        indexCategory: 0
    },
    reducers: {
        chengeCategory(state,{payload}) {
            state.indexCategory = payload
        },
    },
})

export const {chengeCategory} = categoriesSlice.actions
export default categoriesSlice.reducer