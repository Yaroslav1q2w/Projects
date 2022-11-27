import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {decreaseFavorite, increaseFavorite} from "../../../../reducers";
import Button from "../../../Button";
import {Link} from "react-router-dom";
import "./GameList.scss"


const GameList = ({ cardProps, isOpenModal, addToCard}) => {
    const {title, article, price, image} = cardProps


    const favoritesLocalStorage = JSON.parse(localStorage.getItem("favoriteCount"))
    const isFavorite = Boolean(favoritesLocalStorage?.find(favorite => favorite.article === article))

    const [addFavorites,setAddFavorites] = useState(!isFavorite ? false : true)
    const [notFavorites,setNotFavorites] = useState(isFavorite ? false : true)

    const dispatch = useDispatch()


    return (
        <div className="list__item">
            <img src={image} alt={title} width={260} height={150}/>
            <div className="list__item-details">
                <div className="list__item-header">
                    <Link to={`/card/${article}`}><h3 className="list__item-title">{title}</h3></Link>
                    <div className="list__item-favorite">
                        {notFavorites && <AiOutlineStar fontSize={30} onClick={() => {
                            dispatch(increaseFavorite(cardProps))
                            setAddFavorites(true)
                            setNotFavorites(false)
                        }}/>}
                        {addFavorites && <AiFillStar fontSize={30} onClick={() => {
                            dispatch(decreaseFavorite(cardProps))
                            setNotFavorites(true)
                            setAddFavorites(false)
                        }}/>}
                    </div>
                </div>
                <span className="list__item-article">Артикул: {article}</span>
            </div>
            <div className="list__item-description">
                <p className="list__item-price">{price} грн.</p>
                <Button type="button" children="В корзину" className="button" onClick={() => {isOpenModal(); addToCard()}} />
            </div>
        </div>
    );
};

export default GameList;