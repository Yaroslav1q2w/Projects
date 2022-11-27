import React, {useContext} from 'react';
import {useState, useEffect} from "react";
import GameCard from "./components/GameCard";
import Modal from "../Modal";
import "./Cards.scss"
import { useSelector,useDispatch } from 'react-redux'
import {increaseBasket, modalOpen, modalClose, actionFetchCards} from "../../reducers"
import {IoList} from "react-icons/io5"
import {AiOutlineTable} from "react-icons/ai"
import GameList from "./components/GameList";
import {SelectContext} from "../../context";
import {cardsSelector,isModalSelector} from "../../selectors";


const Cards = () => {
    const [selectedProduct,setSelectedProduct] = useState([])
    const {cardList,tableGames,cardGames} = useContext(SelectContext)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionFetchCards());
    },[])


    const cards = useSelector(cardsSelector)
    const modal = useSelector(isModalSelector)


    const gameCard = cards?.map(card => <GameCard cardProps={card} isOpenModal={() => dispatch(modalOpen())} key={card.article}
        data-testid="card-item" addToCard={() => setSelectedProduct(card)}
    />)

    const gameList = cards?.map(card => <GameList cardProps={card} isOpenModal={() => dispatch(modalOpen())} key={card.article}
        data-testid="card-item" addToCard={() => setSelectedProduct(card)}
    />)



    return (
        <div className="section__wrap">
            <div className="button__styles-card">
                <IoList fontSize={40} style={{paddingRight:10}} onClick={tableGames}/>
                <AiOutlineTable fontSize={38} onClick={cardGames}/>
            </div>

            {!cardList && <div className="section__cards-game">{gameCard}</div>}
            {cardList && <div className="section__list-game">{gameList}</div>}

            {modal &&
                <Modal data-testid="modal-add-basket"
                    header="Подтвердите добавление"
                    text={`Добавить ${selectedProduct.title} в корзину?`}
                    closeModal={() => dispatch(modalClose())}
                    onClick={() => dispatch(increaseBasket(selectedProduct))}
                />
            }
        </div>
    );
};

export default Cards;