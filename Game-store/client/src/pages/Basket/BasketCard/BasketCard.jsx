import { Link } from "react-router-dom";
import { Wrapper, ItemDetails, Header, Description } from "./StyledBaasketCard";
import { IoCloseSharp } from "react-icons/io5";

const BasketCard = ({ cardProps, isOpenModal, onclick }) => {
	const { title, article, price, image, genre, _id } = cardProps;

	return (
		<Wrapper>
			<img src={image} alt={title} width={320} height={180} />
			<ItemDetails>
				<Header>
					<Link to={`/api/products/${_id}`}>
						<h3 className="basket__item-title">{title}</h3>
					</Link>
					<span className="basket__item-article">Артикул: {article}</span>
				</Header>
				<Description>
					<p className="item__price">{price} грн.</p>
					<div className="item__remove">
						<IoCloseSharp
							fontSize={36}
							onClick={() => {
								isOpenModal();
								onclick();
							}}
						/>
					</div>
					<div>
						<span className="item-genre">{genre}</span>
					</div>
				</Description>
			</ItemDetails>
		</Wrapper>
	);
};

export default BasketCard;
