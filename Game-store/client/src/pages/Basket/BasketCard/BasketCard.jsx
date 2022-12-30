import React from 'react';
import "./BasketCard.scss"
import CloseIcon from "../../components/CloseIcon";
import {Link} from "react-router-dom";


const BasketCard = ({ cardProps, isOpenModal, onclick}) => {
    const {title, article, price, image, genre,_id} = cardProps

    return (
        <div className="basket__item" data-testid="basket-card">
            <img src={image} alt={title} width={320} height={180}/>
            <div className="basket__item-details">
                <div className="basket__item-header">
                    <Link to={`/api/products/${_id}`}><h3 className="basket__item-title">{title}</h3></Link>
                    <span className="basket__item-article">Артикул: {article}</span>
                </div>
                <div className="basket__item-description">
                    <p className="basket__item-price">{price} грн.</p>
                    <div className="close-card__basket">
                        <CloseIcon onClick={() => {isOpenModal(); onclick()}} />
                    </div>
                    <div>
                        <span className="basket__item-genre">{genre}</span>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default BasketCard;