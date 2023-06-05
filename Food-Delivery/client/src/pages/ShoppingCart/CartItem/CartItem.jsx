import {
	Wrapper,
	ItemDetails,
	Header,
	Description,
	PriceItem,
	HeaderWrapp,
	IconIncrease,
	IconDecrease,
	CounterWrap,
} from "./StyledCartItem";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addCount, removeBasket } from "../../../reducers";

const CartItem = ({ cardProps, isOpenModal, onclick }) => {
	const { title, article, image, developer, count, price } = cardProps;

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<img src={image} alt={title} width={320} height={180} />
			<ItemDetails>
				<HeaderWrapp>
					<Header>
						<h3 className="basket__item-title">{title}</h3>
						<span className="basket__item-article">Артикул: {article}</span>
					</Header>
					<PriceItem>{count * price} грн.</PriceItem>
				</HeaderWrapp>
				<Description>
					<div>
						<span className="item-developer">{developer}</span>
					</div>
					<CounterWrap>
						<IconDecrease
							fontSize={32}
							onClick={() => dispatch(removeBasket(cardProps))}
						/>
						<p className="count">{count}</p>
						<IconIncrease
							fontSize={32}
							onClick={() => dispatch(addCount(cardProps))}
						/>
					</CounterWrap>
					<div className="item__remove">
						<IoCloseSharp
							fontSize={36}
							onClick={() => {
								isOpenModal();
								onclick();
							}}
						/>
					</div>
				</Description>
			</ItemDetails>
		</Wrapper>
	);
};

export default CartItem;
