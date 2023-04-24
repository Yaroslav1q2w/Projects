import { useDispatch } from "react-redux";
import { decreaseFavorite } from "../../../reducers";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import {
	Wrapper,
	ItemDetails,
	Header,
	Description,
} from "./StyledFavoriteCard";

const FavoriteCard = ({ cardProps }) => {
	const { title, article, price, image, genre, _id } = cardProps;

	const dispatch = useDispatch();

	return (
		<Wrapper>
			<img src={image} alt={title} width={280} height={160} />
			<ItemDetails>
				<Header>
					<Link to={`/api/products/${_id}`}>
						<h3 className="favorite__item-title">{title}</h3>
					</Link>
					<span className="favorite__item-article">Артикул: {article}</span>
					<span className="favorite__item-genre">{genre}</span>
				</Header>
				<Description>
					<p className="favorite__item-price">{price} грн.</p>
					<div className="close-card">
						<AiFillStar
							fontSize={30}
							onClick={() => dispatch(decreaseFavorite(cardProps))}
						/>
					</div>
				</Description>
			</ItemDetails>
		</Wrapper>
	);
};

export default FavoriteCard;
