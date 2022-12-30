import React,{useState} from 'react';
import Button from "../../Button";
import "./GameCard.scss"
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useDispatch } from 'react-redux'
import {increaseFavorite,decreaseFavorite,} from "../../../reducers"
import {Link} from "react-router-dom";
import 'swiper/css';


const GameCard = ({ cardProps, isOpenModal, addToCard}) => {
    const {title, article, price, image, description, genre, _id} = cardProps

    const favoritesLocalStorage = JSON.parse(localStorage.getItem("favoriteCount"))
    const isFavorite = Boolean(favoritesLocalStorage?.find(favorite => favorite.article === article))

    const [addFavorites,setAddFavorites] = useState(!isFavorite ? false : true)
    const [notFavorites,setNotFavorites] = useState(isFavorite ? false : true)

    const dispatch = useDispatch()


    return (
        <div className="game__item">
            <div className="game__item-img">
                <img src={image} alt={title} width={320} height={180}/>
                <div className="game__back">
                    <div className="game__back-wrap">
                        <h2 className="game__back-title">{title}</h2>
                        <p className="game__back-desc">{description}</p>
                        <div className="game__back-link">
                            <Link to={`api/products/${_id}`} className="link">перейти</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="game__item-details">
                <div className="game__title">
                    <div className="game__item-header">
                        <Link to={`api/products/${_id}`}><h3 className="game__item-title">{title}</h3></Link>
                        <div className="star-icon">
                            {notFavorites && <AiOutlineStar fontSize={26} onClick={() => {
                                dispatch(increaseFavorite(cardProps))
                                setAddFavorites(true)
                                setNotFavorites(false)
                            }}/>}
                            {addFavorites && <AiFillStar fontSize={26} onClick={() => {
                                dispatch(decreaseFavorite(cardProps))
                                setNotFavorites(true)
                                setAddFavorites(false)
                            }}/>}
                        </div>
                    </div>
                    <span className="game__item-article">Артикул: {article}</span>
                </div>
                <div>
                    <span className="game__item-genre">{genre}</span>
                </div>
                <div className="game__item-description">
                    <p className="game__item-price">{price} грн.</p>
                    <Button type="button"
                            children="В корзину"
                            className="button"
                            onClick={() => {isOpenModal(); addToCard()}}
                    />
                </div>
            </div>
        </div>
    );
};

export default GameCard;


