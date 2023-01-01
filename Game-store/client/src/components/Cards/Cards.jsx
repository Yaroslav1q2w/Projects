import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton";
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
	isModalSelector,
} from "../../selectors";
import MenuCategory from "../MenuCategory";

const Cards = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch();

	const cards = useSelector(cardsSelector);
	const modal = useSelector(isModalSelector);
	const indexCategory = useSelector(categorySelector);

	const category = indexCategory > 0 ? `category=${indexCategory}` : "";

	useEffect(() => {
		dispatch(actionFetchCards(category));
		setIsLoading(false);
		console.log(category);
	}, [category]);

	console.log("card");

	return (
		<div className="section__wrap">
			<MenuCategory />

			<div className="section__cards-game">
				{isLoading
					? [...new Array(9)].map((_, index) => (
							<CardsSceleton key={index} />
					  ))
					: cards?.map((card) => (
							<GameCard
								cardProps={card}
								isOpenModal={() => dispatch(modalOpen())}
								key={card.article}
								addToCard={() => setSelectedProduct(card)}
							/>
					  ))}
			</div>

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
