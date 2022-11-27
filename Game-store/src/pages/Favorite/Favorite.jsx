import React from 'react';
import "./Favorite.scss"
import FavoriteCard from "./FavoriteCard";
import { useSelector } from 'react-redux'
import {FaStarHalfAlt} from "react-icons/fa";
import {favouriteSelector} from "../../selectors";

const Favorite = () => {
    const cardsFavorite = useSelector(favouriteSelector)

    const renderCard = cardsFavorite.map(card => <FavoriteCard key={card.article} cardProps={card}/>)

    return (
        <div className="favorite__wrap" data-testid="favorite-page">
            <header className="favorite__header">Избранное</header>
            <div className="favorite__items">
                {cardsFavorite.length < 1 ? <div className="empty-favorite"><FaStarHalfAlt fontSize={130}/></div> : null}

                {renderCard}
            </div>
        </div>
    );
};

export default Favorite;