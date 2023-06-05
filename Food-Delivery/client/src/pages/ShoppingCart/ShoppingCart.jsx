import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PageForm from "../../components/Form/PageForm";
import CartItem from "./CartItem";
import Button from "../../components/Button";
import ModalSubmit from "../../components/Form/components/ModalSubmit";
import { useSelector, useDispatch } from "react-redux";
import {
	decreaseBasket,
	modalOpen,
	modalClose,
	formOpen,
	modalSubmitClose,
	clearItems,
	fetchOrders,
} from "../../reducers";
import { BiCartAlt } from "react-icons/bi";
import {
	basketSelector,
	isModalPageFormSelector,
	isModalSelector,
	isModalSubmitSelector,
} from "../../selectors";
import {
	Container,
	Header,
	ButtonSubmit,
	BasketItems,
} from "./StyledShoppingCart";

const ShoppingCart = () => {
	const [cardItem, setCardItem] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	const modalFinishSubmit = useSelector(isModalSubmitSelector);
	const cards = useSelector(basketSelector);
	const modal = useSelector(isModalSelector);
	const formPage = useSelector(isModalPageFormSelector);

	const dispatch = useDispatch();

	const renderCard = cards.map((card) => (
		<CartItem
			key={card.article}
			cardProps={card}
			isOpenModal={() => dispatch(modalOpen())}
			onclick={() => setCardItem(card)}
		/>
	));

	useEffect(() => {
		setTotalPrice(
			cards.reduce((accum, item) => accum + item.price * item.count, 0)
		);

		dispatch(fetchOrders());
	}, [cards, dispatch]);

	return (
		<Container>
			<Header>
				<div className="total__price">
					<span>Общая сумма: {totalPrice} грн.</span>
				</div>
				<p>Корзина</p>

				{cards.length > 0 ? (
					<ButtonSubmit>
						<Button
							children="Оформить заказ"
							data-testid="button-order"
							className="basket__button-elem"
							onClick={() => dispatch(formOpen())}
						/>
					</ButtonSubmit>
				) : null}
			</Header>

			<BasketItems>
				{cards.length < 1 ? (
					<div className="empty-basket">
						<BiCartAlt fontSize={180} />
					</div>
				) : null}

				{renderCard}
			</BasketItems>

			{modal && (
				<Modal
					header="Подтвердите удаления"
					text={`Вы уверенны что хотите удалить ${cardItem.title} с корзины?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(decreaseBasket(cardItem))}
				/>
			)}

			{formPage && <PageForm />}

			{modalFinishSubmit && (
				<ModalSubmit
					header="Спасибо за покупку!"
					text="Данные оправлены в обработку, спасибо за Ваш заказ."
					closeModal={() => dispatch(modalSubmitClose())}
					onClick={() => dispatch(clearItems())}
				/>
			)}
		</Container>
	);
};

export default ShoppingCart;
