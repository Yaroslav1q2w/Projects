import React from 'react';
import "./FavoriteCard.scss"
import StarIcon from "../../components/StarIcon";
import { useDispatch } from 'react-redux'
import {decreaseFavorite} from "../../../reducers";
import {Link} from "react-router-dom";


const FavoriteCard = ({ cardProps}) => {
    const {title, article, price, image} = cardProps

    const dispatch = useDispatch()

    return (
        <div className="favorite__item">
            <img src={image} alt={title} width={280} height={160}/>
            <div className="favorite__item-details">
                <div className="favorite__item-header">
                    <Link to={`/card/${article}`}><h3 className="favorite__item-title">{title}</h3></Link>
                    <span className="favorite__item-article">Артикул: {article}</span>
                </div>
                <div className="favorite__item-description">
                    <p className="favorite__item-price">{price} грн.</p>
                    <StarIcon data-testid="icon-delete" onClick={() => dispatch(decreaseFavorite(cardProps))} />
                </div>
            </div>
        </div>
    )
};


export default FavoriteCard;