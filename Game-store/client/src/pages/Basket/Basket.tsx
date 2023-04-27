import { useEffect, useState } from "react";
import Modal from "../../components/Modal";
import PageForm from "../../components/Form/PageForm";
import BasketCard from "./BasketCard";
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
} from "../../reducers";
import { BiCartAlt } from "react-icons/bi";
import {
	basketSelector,
	isModalPageFormSelector,
	isModalSelector,
	isModalSubmitSelector,
} from "../../selectors";
import { Container, Header, ButtonSubmit, BasketItems } from "./StyledBasket";
import { ICard } from "../../types/data";

const Basket = () => {
	const [cardItem, setCardItem] = useState<ICard | null>(null);
	const [totalPrice, setTotalPrice] = useState(0);

	const modalFinishSubmit: boolean = useSelector(isModalSubmitSelector);
	const cards: ICard[] = useSelector(basketSelector);
	const modal: boolean = useSelector(isModalSelector);
	const formPage: boolean = useSelector(isModalPageFormSelector);

	const dispatch = useDispatch();

	const renderCard = cards.map((card: ICard) => (
		<BasketCard
			key={card.article}
			cardProps={card}
			isOpenModal={() => dispatch(modalOpen())}
			onСlick={() => setCardItem(card)}
		/>
	));

	useEffect(() => {
		setTotalPrice(
			cards.reduce(
				(accum: number, item: { price: number }) => accum + item.price,
				0
			)
		);
	}, [cards]);

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
					text={`Вы уверенны что хотите удалить ${cardItem?.title} с корзины?`}
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

export default Basket;
