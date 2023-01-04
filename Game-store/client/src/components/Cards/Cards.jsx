import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton";
import MenuCategory from "../MenuCategory";
import Pagination from "../Pagination";
import "./Cards.scss";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";

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

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const cards = useSelector(cardsSelector);
	const modal = useSelector(isModalSelector);
	const isLoading = useSelector(isLoadingSelector);

	const categoryID = useSelector(categorySelector);
	const pageCount = useSelector(pageCountSelector);
	const limitCount = useSelector(currentLimitSelector);

	console.log(cards);

	// useEffect(() => {
	// 	if (window.location.search) {
	// 		const params = qs.parse(window.location.search.substring(1));

	// 		setFilters(params);
	// 	}
	// });

	// useEffect(() => {
	// 	const queryString = qs.stringify({ categoryID });

	// 	navigate(`?${queryString}`);
	// }, [categoryID]);

	useEffect(() => {
		let category = categoryID > 0 ? `category=${categoryID}` : "";
		let limit = `_limit=${limitCount}`;
		let page = `_page=${pageCount}`;

		dispatch(actionFetchCards({ category, limit, page }));

		window.scrollTo(0, 0);
	}, [categoryID, pageCount, limitCount]);

	const skeleton = [...new Array(9)].map((_, index) => (
		<CardsSceleton key={index} />
	));

	const cardGames = cards?.map((card) => (
		<GameCard
			cardProps={card}
			isOpenModal={() => dispatch(modalOpen())}
			key={card.article}
			addToCard={() => setSelectedProduct(card)}
		/>
	));

	console.log("card");

	return (
		<div className="section__wrap">
			<MenuCategory />

			<div className="section__cards-game">
				{isLoading ? skeleton : cardGames}
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
