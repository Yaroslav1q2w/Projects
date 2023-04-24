import FavoriteCard from "./FavouriteCard";
import { useSelector } from "react-redux";
import { FaStarHalfAlt } from "react-icons/fa";
import { favouriteSelector } from "../../selectors";
import { Container, TitleFavourite, FavoriteItems } from "./StyledFavourite";

const Favourite = () => {
	const cardsFavorite = useSelector(favouriteSelector);

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
