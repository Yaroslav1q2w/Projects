import React from 'react';
import {useState, useEffect} from "react";
import GameCard from "./GameCard";
import Modal from "../Modal";
import "./Cards.scss"
import { useSelector,useDispatch } from 'react-redux'
import {increaseBasket, modalOpen, modalClose, actionFetchCards} from "../../reducers"
import {cardsSelector,isModalSelector} from "../../selectors";
import MenuCategory from "../MenuCategory";


const Cards = () => {
    const [selectedProduct,setSelectedProduct] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actionFetchCards());
    },[])


    const cards = useSelector(cardsSelector)
    const modal = useSelector(isModalSelector)


    const gameCard = cards?.map(card => <GameCard cardProps={card} isOpenModal={() => dispatch(modalOpen())} key={card.article}
        data-testid="card-item" addToCard={() => setSelectedProduct(card)}
    />)


    return (
        <div className="section__wrap">
            <MenuCategory/>

            <div className="section__cards-game">{gameCard}</div>

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