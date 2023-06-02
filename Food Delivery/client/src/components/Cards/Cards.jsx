import { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton";
import MenuCategory from "../MenuCategory";
import Pagination from "../Pagination";
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
import { Container, SectionWrapp } from "./StyledCards";

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
	}, [categoryID, dispatch, limitCount, pageCount]);

	return (
		<Container>
			<MenuCategory />

			<SectionWrapp>
				{isLoading
					? [...new Array(9)].map((_, index) => <CardsSceleton key={index} />)
					: cards.map((card) => (
							<Card
								cardProps={card}
								isOpenModal={() => dispatch(modalOpen())}
								key={card.article}
								addToCard={() => setSelectedProduct(card)}
							/>
					  ))}
			</SectionWrapp>

			<Pagination />

			{modal && (
				<Modal
					header="Подтвердите добавление"
					text={`Добавить ${selectedProduct.title} в корзину?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(increaseBasket(selectedProduct))}
				/>
			)}
		</Container>
	);
};

export default Cards;
