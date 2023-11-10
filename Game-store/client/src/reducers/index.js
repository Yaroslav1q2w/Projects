import favoriteReducer, {
	increaseFavorite,
	decreaseFavorite,
} from "./favourite.reducer";
import todoReducer, { actionFetchCards } from "./todo.reducer";
import orderReducer, { createOrder, fetchOrders } from "./order.reducer";
import basketReducer, {
	increaseBasket,
	decreaseBasket,
	clearItems,
	addCount,
	removeBasket,
} from "./basket.reducer";
import modalReducer, {
	modalOpen,
	modalClose,
	formClose,
	formOpen,
	modalSubmitOpen,
	modalSubmitClose,
} from "./modal.reducer";
import filterReducer, { chengeCategory, setPageCount } from "./filter.reducer";

import authReducer, { fetchAuthData, clearDataAuth } from "./auth.reducer";
import registrationReducer, {
	registerFetchData,
	clearDataRegister,
} from "./registration.reducer";

export {
	favoriteReducer,
	increaseFavorite,
	decreaseFavorite,
	todoReducer,
	actionFetchCards,
	orderReducer,
	fetchOrders,
	createOrder,
	basketReducer,
	increaseBasket,
	decreaseBasket,
	clearItems,
	addCount,
	removeBasket,
	modalReducer,
	modalOpen,
	modalClose,
	formClose,
	formOpen,
	modalSubmitOpen,
	modalSubmitClose,
	filterReducer,
	chengeCategory,
	setPageCount,
	authReducer,
	fetchAuthData,
	clearDataAuth,
	registrationReducer,
	registerFetchData,
	clearDataRegister,
};
