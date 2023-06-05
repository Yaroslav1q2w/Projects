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

export {
	orderReducer,
	fetchOrders,
	createOrder,
	todoReducer,
	actionFetchCards,
	basketReducer,
	removeBasket,
	addCount,
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
	filterReducer,
	chengeCategory,
	setPageCount,
};
