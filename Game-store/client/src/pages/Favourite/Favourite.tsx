import FavoriteCard from "./FavouriteCard";
import { useSelector } from "react-redux";
import { FaStarHalfAlt } from "react-icons/fa";
import { favouriteSelector } from "../../selectors";
import { Container, TitleFavourite, FavoriteItems } from "./StyledFavourite";
import { ICard } from "../../types/data";

const Favourite: React.FC = () => {
	const cardsFavorite: ICard[] = useSelector(favouriteSelector);

	const renderCard = cardsFavorite.map((card) => (
		<FavoriteCard key={card.article} cardProps={card} />
	));

	return (
		<Container>
			<TitleFavourite>Избранное</TitleFavourite>
			<FavoriteItems>
				{cardsFavorite.length < 1 ? (
					<div className="empty-favorite">
						<FaStarHalfAlt fontSize={130} />
					</div>
				) : null}

				{renderCard}
			</FavoriteItems>
		</Container>
	);
};

export default Favourite;
