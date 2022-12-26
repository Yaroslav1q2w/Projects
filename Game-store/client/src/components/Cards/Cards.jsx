import React,{useState, useEffect} from 'react';
import GameCard from "./GameCard";
import Modal from "../Modal";
import CardsSceleton from "../CardsSceleton"
import "./Cards.scss"
import { useSelector,useDispatch } from 'react-redux'
import {increaseBasket, modalOpen, modalClose, actionFetchCards} from "../../reducers"
import {cardsSelector, categorySelector, isModalSelector} from "../../selectors";
import MenuCategory from "../MenuCategory";


const Cards = () => {
    const [selectedProduct,setSelectedProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch()

    const cards = useSelector(cardsSelector)
    const modal = useSelector(isModalSelector)
    const indexCategory = useSelector(categorySelector)

    useEffect(() => {
        dispatch(actionFetchCards());
        setTimeout(() => {
            setIsLoading(false)
        },1000)
    },[])


    const gameCardFilter = cards?.filter(card => {
        if (indexCategory === 0){
            return cards
        } else if (indexCategory === card.category){
            return card
        }
    })
    console.log("text")

    return (
        <div className="section__wrap">
            <MenuCategory/>

            <div className="section__cards-game">{
                isLoading
                ? [...new Array(9)].map((_, index) => <CardsSceleton key={index}/>)
                :  gameCardFilter?.map(card => <GameCard cardProps={card} isOpenModal={() => dispatch(modalOpen())} key={card.article}
                                                              data-testid="card-item" addToCard={() => setSelectedProduct(card)}
                    />)
            }
            </div>

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