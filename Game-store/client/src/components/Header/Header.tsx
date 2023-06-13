import { useEffect } from "react";
import Basket from "./Basket";
import FavoriteCards from "./FavoritCards";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, favouriteSelector } from "../../selectors";
import { chengeCategory } from "../../reducers";
import {
	HeaderContainer,
	HeaderWrapp,
	HeaderDescription,
} from "./StyledHeader";

const Header = () => {
	const dispatch = useDispatch();

	const basketCount = useSelector(basketSelector);
	const favoriteCount = useSelector(favouriteSelector);

	useEffect(() => {
		localStorage.setItem("basketCount", JSON.stringify(basketCount));
		localStorage.setItem("favoriteCount", JSON.stringify(favoriteCount));
	}, [basketCount, favoriteCount]);

	return (
		<HeaderContainer>
			<HeaderWrapp>
				<Link to="/" onClick={() => dispatch(chengeCategory(0))}>
					<div className="header__logo">
						<h3 className="logo">Game Store</h3>
						<p className="header__logo-text">магазин компьютерных игр</p>
					</div>
				</Link>
				<HeaderDescription>
					<Link to="/" data-testid="home-link" className="header__homepage">
						<HomePage />
					</Link>
					<Link
						to="api/favorite"
						data-testid="favorite-link"
						className="header__favorite"
					>
						<FavoriteCards />
						<span className="header__cart-number">{favoriteCount.length}</span>
					</Link>
					<Link
						to="api/basket"
						data-testid="basket-link"
						className="header__basket"
					>
						<Basket />
						<span className="header__cart-number">{basketCount.length}</span>
					</Link>
				</HeaderDescription>
			</HeaderWrapp>
		</HeaderContainer>
	);
};

export default Header;
