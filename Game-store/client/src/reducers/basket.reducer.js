import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        selectedProduct: {},
        routeBasket: JSON.parse(localStorage.getItem("basketCount")) || []
    },
    reducers: {
        increaseBasket(state,{payload}) {
            const cardId = state.routeBasket.find(el => el.article === payload.article)
            if (cardId) {
                alert(`Игра ${payload.title} уже добавлена в корзину`)
            } else {
                state.routeBasket.push(payload)
            }
        },
        decreaseBasket(state,{payload}) {
            state.routeBasket = state.routeBasket.filter(el => el.article !== payload.article)
        },
        clearItems(state) {
            state.routeBasket = []
        }
    },
})

export const {increaseBasket,decreaseBasket,clearItems} = basketSlice.actions
export default basketSlice.reducer