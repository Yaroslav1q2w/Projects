import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton";
import MenuCategory from "../MenuCategory";
import Pagination from "../Pagination";
import "./Cards.scss";
import { useSelector, useDispatch } from "react-redux";

import {
	increaseBasket,
	modalOpen,
	modalClose,
	actionFetchCards,
} from "../../reducers";
import {
	cardsSelector,
	categorySelector,
	isLoadingSelector,
	isModalSelector,
	pageCountSelector,
	currentLimitSelector,
} from "../../selectors";

const Cards = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);

	const dispatch = useDispatch();

	const cards = useSelector(cardsSelector);
	const modal = useSelector(isModalSelector);
	const isLoading = useSelector(isLoadingSelector);

	const categoryID = useSelector(categorySelector);
	const pageCount = useSelector(pageCountSelector);
	const limitCount = useSelector(currentLimitSelector);

	useEffect(() => {
		let category = categoryID > 0 ? `category=${categoryID}` : "";
		let limit = `_limit=${limitCount}`;
		let page = `_page=${pageCount}`;

		dispatch(actionFetchCards({ category, limit, page }));

		window.scrollTo(0, 0);
	}, [categoryID, pageCount]);

	return (
		<div className="section__wrap">
			<MenuCategory />

			<div className="section__cards-game">
				{isLoading
					? [...new Array(9)].map((_, index) => (
							<CardsSceleton key={index} />
					  ))
					: cards.map((card) => (
							<GameCard
								cardProps={card}
								isOpenModal={() => dispatch(modalOpen())}
								key={card.article}
								addToCard={() => setSelectedProduct(card)}
							/>
					  ))}
			</div>

			<Pagination />

			{modal && (
				<Modal
					data-testid="modal-add-basket"
					header="Подтвердите добавление"
					text={`Добавить ${selectedProduct.title} в корзину?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(increaseBasket(selectedProduct))}
				/>
			)}
		</div>
	);
};

export default Cards;
