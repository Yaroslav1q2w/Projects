import React, {useState} from 'react';
import "./Basket.scss"
import Modal from "../../components/Modal";
import PageForm from "../../components/Form/PageForm";
import BasketCard from "./BasketCard";
import Button from "../../components/Button";
import ModalSubmit from "../../components/Form/components/ModalSubmit";

import { useSelector,useDispatch } from 'react-redux'
import {decreaseBasket, modalOpen, modalClose, formOpen, modalSubmitClose,clearItems} from "../../reducers"
import {BiCartAlt} from "react-icons/bi";
import {basketSelector, isModalPageFormSelector, isModalSelector,isModalSubmitSelector} from "../../selectors";


const Basket = () => {

    const [cardItem, setCardItem] = useState([])

    const modalFinishSubmit = useSelector(isModalSubmitSelector)
    const cards = useSelector(basketSelector)
    const modal = useSelector(isModalSelector)
    const formPage = useSelector(isModalPageFormSelector)

    const dispatch = useDispatch()


    const renderCard = cards.map(card => <BasketCard key={card.article} cardProps={card}
                                                     isOpenModal={() => dispatch(modalOpen())}
                                                     onclick={() => setCardItem(card)}/>
    )


    return (
        <div className="basket__wrap" data-testid="basket-page">
            <header className="basket__header">
                <p>Корзина</p>
                {cards.length > 0 ? <div className="basket__button">
                                        <Button children="Оформить заказ" data-testid="button-order" className="button" onClick={() => dispatch(formOpen())}/>
                                    </div>
                                  : null}
            </header>

            <div className="basket__items">
                {cards.length < 1 ? <div className="empty-basket"><BiCartAlt fontSize={180} /></div> : null}

                {renderCard}
            </div>

            {modal &&
                <Modal
                    header="Подтвердите удаления"
                    text={`Вы уверенны что хотите удалить ${cardItem.title} с корзины?`}
                    closeModal={() => dispatch(modalClose())}
                    onClick={() => dispatch(decreaseBasket(cardItem))}
                />
            }

            {formPage && <PageForm/>}

            {modalFinishSubmit &&
                <ModalSubmit
                    header="Спасибо за покупку!"
                    text="Данные оправлены в обработку, спасибо за Ваш заказ."
                    closeModal={() => dispatch(modalSubmitClose())}
                    onClick={() => dispatch(clearItems())}
                />
            }
        </div>
    );
};

export default Basket;