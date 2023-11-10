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
	HeaderInfo,
} from "./StyledShoppingCart";
import { ICard } from "../../types/data";

const ShoppingCart = () => {
	const [cardItem, setCardItem] = useState<ICard | null>(null);
	const [totalPrice, setTotalPrice] = useState(0);

	const modalFinishSubmit: boolean = useSelector(isModalSubmitSelector);
	const cards: ICard[] = useSelector(basketSelector);
	const modal: boolean = useSelector(isModalSelector);
	const formPage: boolean = useSelector(isModalPageFormSelector);

	const dispatch = useDispatch();

	const renderCard = cards.map((card: ICard) => (
		<CartItem
			key={card.article}
			cardProps={card}
			isOpenModal={() => dispatch(modalOpen())}
			onСlick={() => setCardItem(card)}
		/>
	));

	useEffect(() => {
		setTotalPrice(
			cards.reduce(
				(accum: number, item: { price: number; count: number }) =>
					accum + item.price * item.count,
				0
			)
		);
	}, [cards]);

	return (
		<Container>
			<Header>
				<h1>Кошик</h1>

				<HeaderInfo>
					<div className="total__price">
						<span>Загальна сума: {totalPrice} грн.</span>
					</div>

					{cards.length > 0 ? (
						<ButtonSubmit>
							<Button
								children="Оформити замовлення"
								className="basket__button-elem"
								onClick={() => dispatch(formOpen())}
							/>
						</ButtonSubmit>
					) : null}
				</HeaderInfo>
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
					header="Підтвердіть видалення"
					text={`Ви впевнені що хочете видалити ${cardItem?.title} з кошика?`}
					closeModal={() => dispatch(modalClose())}
					onClick={() => dispatch(decreaseBasket(cardItem))}
				/>
			)}

			{formPage && <PageForm />}

			{modalFinishSubmit && (
				<ModalSubmit
					header="Дякую за покупку!"
					text="Дані оправлені в обробку, дякую за Ваше замовлення."
					closeModal={() => dispatch(modalSubmitClose())}
					onClick={() => dispatch(clearItems())}
				/>
			)}
		</Container>
	);
};

export default ShoppingCart;
