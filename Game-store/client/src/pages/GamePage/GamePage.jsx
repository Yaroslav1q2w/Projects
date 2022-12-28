import React, {useEffect} from 'react';
import {Link, useParams,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, isModalSelector} from "../../selectors";
import {actionFetchCards, increaseBasket, modalClose, modalOpen} from "../../reducers";
import {ReactComponent as RightArrow} from "./images/right-arrow.svg"

import "./GamePage.scss"
import Button from "../../components/Button";
import {useState} from "react";
import Modal from "../../components/Modal";
import sendRequest from "../../helpers/sendRequest";
import {API_URL} from "../../configs/API";



const GamePage = () => {
    const [selectedProduct,setSelectedProduct] = useState([])

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const {card_id} = useParams()
    const dispatch = useDispatch()
    const cards = useSelector(cardsSelector)
    const modal = useSelector(isModalSelector)


    // useEffect(() => {
    //     sendRequest(`${API_URL}/edit/${card_id}`)
    //         .then((game) => {
    //             console.log(game);
    //             const {image,title,genre,data,developer,platforms,language,the_plot} = game
    //         })
    //
    //
    //     window.scrollTo(0,0)
    // }, [])


    const gameItem = cards?.find(el => el.article == card_id)


    return (
        <>
            {cards &&
                <section className="page__game">
                    <div className="page__game-img" style={{backgroundImage: `url(${gameItem.image})`}}/>
                    <div className="container__wrap">
                        <main className="main__wrap">
                            <div className="main__wrap-header">
                                <Link className="btn-back" onClick={goBack}><RightArrow/></Link>
                                <div className="header__poster">
                                    <img src={gameItem.image} alt={gameItem.title}/>
                                </div>
                                <div className="header__content">
                                    <p className="game__page-title">{gameItem.title}</p>
                                    <p className="game__page-subname">{gameItem.title}</p>
                                    <p className="game__page-info">Жанр:<span className="colored">{gameItem.genre}</span></p>
                                    <p className="game__page-info">Дата выпуска:<span className="colored">{gameItem.data}</span></p>
                                    <p className="game__page-info">Разработчик:<span className="colored">{gameItem.developer}</span></p>
                                    <p className="game__page-info">Платформы:<span className="colored">{gameItem.platforms}</span></p>
                                    <p className="game__page-info">Языки интерфейса:<span className="colored">{gameItem.language}</span></p>
                                </div>
                            </div>
                            <div className="game__page-description">{gameItem.the_plot}</div>
                        </main>
                        <div className="footer__button">
                            <Button children="Добавить в корзину"
                                    className="footer__button-elem"
                                    onClick={() => {dispatch(modalOpen());setSelectedProduct(gameItem)}}
                            />
                        </div>
                    </div>

                    {modal &&
                        <Modal data-testid="modal-add-basket"
                               header="Подтвердите добавление"
                               text={`Добавить ${selectedProduct.title} в корзину?`}
                               closeModal={() => dispatch(modalClose())}
                               onClick={() => dispatch(increaseBasket(selectedProduct))}
                        />
                    }
                </section>}
        </>
    );
};

export default GamePage;