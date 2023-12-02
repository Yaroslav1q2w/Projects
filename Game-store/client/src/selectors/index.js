import { basketSelector, selectedProduct } from "./basket.selector";
import { favouriteSelector } from "./favourite.selector";
import {
	cardsSelector,
	isLoadingSelector,
	isTotalCount,
	allcCardsSelector,
} from "./toDoCards.selector";
import { orderSelector } from "./order.selector";

import {
	isModalSelector,
	isModalSubmitSelector,
	isModalPageFormSelector,
} from "./modal.selector";
import {
	categorySelector,
	pageCountSelector,
	currentLimitSelector,
} from "./filter.selector";
import {
	registrationSelector,
	errorDataRegister,
	registerAllCustomers,
} from "./registration.selector";
import { authSelector, errorDataAuth } from "./auth.selector";

export {
	orderSelector,
	basketSelector,
	favouriteSelector,
	cardsSelector,
	isLoadingSelector,
	isModalSelector,
	isModalSubmitSelector,
	isModalPageFormSelector,
	selectedProduct,
	categorySelector,
	pageCountSelector,
	currentLimitSelector,
	isTotalCount,
	registrationSelector,
	errorDataRegister,
	authSelector,
	errorDataAuth,
	allcCardsSelector,
	registerAllCustomers,
};
