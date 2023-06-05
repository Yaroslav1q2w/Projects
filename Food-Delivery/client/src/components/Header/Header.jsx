import { useEffect } from "react";
import Basket from "./Basket";
import HomePage from "./HomePage";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector } from "../../selectors";
import { chengeCategory } from "../../reducers";
import {
	HeaderContainer,
	HeaderWrapp,
	HeaderDescription,
} from "./StyledHeader";

const Header = () => {
	const dispatch = useDispatch();

	const basketCount = useSelector(basketSelector);

	const totalCount = basketCount.reduce((acum, item) => acum + item.count, 0);

	useEffect(() => {
		localStorage.setItem("ShoppingCard", JSON.stringify(basketCount));
	}, [basketCount]);

	return (
		<HeaderContainer>
			<HeaderWrapp>
				<Link to="/" onClick={() => dispatch(chengeCategory(0))}>
					<div className="header__logo">
						<h3 className="logo">Food Delivery</h3>
					</div>
				</Link>
				<HeaderDescription>
					<Link to="/" className="header__homepage">
						<HomePage />
					</Link>
					<Link to="api/basket" className="header__basket">
						<Basket />
						<span className="header__cart-number">{totalCount}</span>
					</Link>
				</HeaderDescription>
			</HeaderWrapp>
		</HeaderContainer>
	);
};

export default Header;
