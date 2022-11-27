import favoriteReducer, {increaseFavorite,decreaseFavorite} from "./favourite.reducer";
import todoReducer, {actionFetchCards} from "./todo.reducer"
import basketReducer, {increaseBasket,decreaseBasket,clearItems} from "./basket.reducer"
import modalReducer, {modalOpen,modalClose,formClose,formOpen,modalSubmitOpen,modalSubmitClose} from "./modal.reducer"

export {
    favoriteReducer,
    increaseFavorite,
    decreaseFavorite,
    todoReducer,
    actionFetchCards,
    basketReducer,
    increaseBasket,
    decreaseBasket,
    clearItems,
    modalReducer,
    modalOpen,
    modalClose,
    formClose,
    formOpen,
    modalSubmitOpen,
    modalSubmitClose,
}