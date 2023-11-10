/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	authSelector,
	basketSelector,
	favouriteSelector,
	registrationSelector,
} from "../../selectors";
import { chengeCategory, setPageCount } from "../../reducers";
import {
	HeaderContainer,
	HeaderWrapp,
	HeaderDescription,
	HomeIcon,
	FavouriteIcon,
	ShoppingCartIcon,
	UserRegister,
	IconMyAccount,
} from "./StyledHeader";
import DropdownRegister from "./components/DropdownRegister";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const basketCount = useSelector(basketSelector);
	const favouriteCount = useSelector(favouriteSelector);
	const isAuth = useSelector(authSelector);
	const isRegistration = useSelector(registrationSelector);

	const registerDataString = localStorage.getItem("registerData");
	const authDataString = localStorage.getItem("authData");

	const registerData = registerDataString
		? JSON.parse(registerDataString)
		: null;
	const authData = authDataString ? JSON.parse(authDataString) : null;

	useEffect(() => {
		localStorage.setItem("ShoppingCardCount", JSON.stringify(basketCount));
		localStorage.setItem("FavouriteCount", JSON.stringify(favouriteCount));
	}, [basketCount, favouriteCount]);

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				dropdownRef.current.contains(event.target as Node)
			) {
				return;
			}
			setIsOpen(false);
		};
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);

	const LogoOnclick = () => {
		dispatch(chengeCategory(0));
		dispatch(setPageCount(1));
	};

	const toggleDropdown = (event: React.MouseEvent) => {
		event.stopPropagation();
		setIsOpen(!isOpen);
	};

	const handlerCloseForm = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (isAuth) {
			setIsOpen(false);
			navigate("/");
		}

		if (isRegistration) navigate("/");
	}, [isAuth, isRegistration]);

	const buttonAuthorization =
		registerData || authData ? (
			<Link to="/api/my-account">
				<UserRegister>
					<IconMyAccount />
					<span>My account</span>
				</UserRegister>
			</Link>
		) : (
			<UserRegister onClick={toggleDropdown}>
				<IconMyAccount />
				<span>Sign Up / Log In</span>
			</UserRegister>
		);

	return (
		<HeaderContainer>
			<HeaderWrapp>
				<Link to="/" onClick={LogoOnclick}>
					<div className="header__logo">
						<h3 className="logo">Game Store</h3>
						<p className="header__logo-text">магазин комп'ютерних ігор</p>
					</div>
				</Link>
				<HeaderDescription>
					<Link to="/" className="header__homepage">
						<HomeIcon />
					</Link>
					<Link to="api/favorite" className="header__favorite">
						<FavouriteIcon />
						<span className="header__cart-number">{favouriteCount.length}</span>
					</Link>
					<Link to="api/basket" className="header__basket">
						<ShoppingCartIcon />
						<span className="header__cart-number">{basketCount.length}</span>
					</Link>

					{buttonAuthorization}
				</HeaderDescription>

				<DropdownRegister
					active={isOpen ? "auto" : 0}
					ref={dropdownRef}
					closeFormPages={handlerCloseForm}
				/>
			</HeaderWrapp>
		</HeaderContainer>
	);
};

export default Header;
