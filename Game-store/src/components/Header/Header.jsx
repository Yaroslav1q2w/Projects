import React,{useEffect} from 'react';
import Basket from "./Basket"
import FavoriteCards from "./FavoritCards"
import "./Header.scss"
import HomePage from "./HomePage/HomePage";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux'
import {basketSelector,favouriteSelector} from "../../selectors";


const Header = () => {
    const basketCount = useSelector(basketSelector)
    const favoriteCount = useSelector(favouriteSelector)

    useEffect(() => {
        localStorage.setItem("basketCount",JSON.stringify(basketCount))
        localStorage.setItem("favoriteCount",JSON.stringify(favoriteCount))
    },[basketCount,favoriteCount])


    return (
        <header className="header">
            <div className="header-wrap">
                <Link to="/">
                    <div className="header__logo">
                        <h3 className="logo">Game Store</h3>
                        <p className="header__logo-text">магазин компьютерных игр</p>
                    </div>
                </Link>
                <div className="header__description">
                    <Link to="/" data-testid="home-link" className="header__homepage">
                        <HomePage />
                    </Link>
                    <Link to="/favorite" data-testid="favorite-link" className="header__favorite">
                        <FavoriteCards />
                        <span className="header__cart-number">{favoriteCount.length}</span>
                    </Link>
                    <Link to="/basket" data-testid="basket-link" className="header__basket">
                        <Basket />
                        <span className="header__cart-number">{basketCount.length}</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};


export default Header;