import Button from "../../Button";
import { Link } from "react-router-dom";
import {
	Wrapper,
	ImageItem,
	CardBack,
	CardBackWrapp,
	Details,
	HeaderCard,
	Article,
	Genre,
	Description,
} from "./StyledCard";

const Card = ({ cardProps, isOpenModal, addToCard }) => {
	const { title, article, price, image, description, developer, _id } =
		cardProps;

	return (
		<Wrapper>
			<Link to={`api/products/${_id}`}>
				<ImageItem>
					<img src={image} alt={title} width={320} height={180} />
					<CardBack>
						<CardBackWrapp>
							<h2 className="card__back-title">{title}</h2>
							<p className="card__back-desc">{description}</p>
						</CardBackWrapp>
					</CardBack>
				</ImageItem>
			</Link>
			<Details>
				<div className="card__title-wrapp">
					<HeaderCard>
						<Link to={`api/products/${_id}`}>
							<h3 className="title">{title}</h3>
						</Link>
					</HeaderCard>
					<Article>Артикул: {article}</Article>
				</div>
				<div>
					<Genre>{developer}</Genre>
				</div>
				<Description>
					<p className="card__item-price">{price} грн.</p>
					<Button
						type="button"
						children="В корзину"
						className="button-card"
						onClick={() => {
							isOpenModal();
							addToCard();
						}}
					/>
				</Description>
			</Details>
		</Wrapper>
	);
};

export default Card;
