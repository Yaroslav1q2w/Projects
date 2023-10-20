import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector, favouriteSelector } from "../../selectors";
import { chengeCategory, setPageCount } from "../../reducers";
import {
	HeaderContainer,
	HeaderWrapp,
	HeaderDescription,
	HomeIcon,
	FavouriteIcon,
	ShoppingCartIcon,
} from "./StyledHeader";

const Header = () => {
	const dispatch = useDispatch();

	const basketCount = useSelector(basketSelector);
	const favoriteCount = useSelector(favouriteSelector);

	useEffect(() => {
		localStorage.setItem("ShoppingCardCount", JSON.stringify(basketCount));
		localStorage.setItem("FavouriteCount", JSON.stringify(favoriteCount));
	}, [basketCount, favoriteCount]);

	const LogoOnclick = () => {
		dispatch(chengeCategory(0));
		dispatch(setPageCount(1));
	};

	return (
		<HeaderContainer>
			<HeaderWrapp>
				<Link to="/" onClick={LogoOnclick}>
					<div className="header__logo">
						<h3 className="logo">Game Store</h3>
						<p className="header__logo-text">магазин компьютерных игр</p>
					</div>
				</Link>
				<HeaderDescription>
					<Link to="/" data-testid="home-link" className="header__homepage">
						<HomeIcon />
					</Link>
					<Link
						to="api/favorite"
						data-testid="favorite-link"
						className="header__favorite"
					>
						<FavouriteIcon />
						<span className="header__cart-number">{favoriteCount.length}</span>
					</Link>
					<Link
						to="api/basket"
						data-testid="basket-link"
						className="header__basket"
					>
						<ShoppingCartIcon />
						<span className="header__cart-number">{basketCount.length}</span>
					</Link>
				</HeaderDescription>
			</HeaderWrapp>
		</HeaderContainer>
	);
};

export default Header;
