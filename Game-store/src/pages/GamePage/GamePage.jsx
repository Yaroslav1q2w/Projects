import React, {useEffect} from 'react';
import {Link, useParams,useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector} from "../../selectors";
import {actionFetchCards} from "../../reducers";
import {ReactComponent as RightArrow} from "./images/right-arrow.svg"

import "./GamePage.scss"



const GamePage = () => {

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const {card_id} = useParams()
    const dispatch = useDispatch()
    const cards = useSelector(cardsSelector)

    useEffect(() => {
        dispatch(actionFetchCards());
        window.scrollTo(0,0)
    }, [])


    const gameItem = cards?.find(el => el.article == card_id)


    return (
        <>
            {cards &&
                <section className="page__game">
                    <div className="page__game-img" style={{backgroundImage: `url(../../../${gameItem.image})`}}/>
                    <div className="container__wrap">
                        <main className="main-wrap">
                            <Link className="btn-back" onClick={goBack}><RightArrow/></Link>
                            <div className="header__poster">
                                <img src={`../../../${gameItem.image}`} alt={gameItem.title}/>
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
                            <div className="game__page-description">{gameItem.the_plot}</div>
                        </main>
                    </div>
                </section>}
        </>
    );
};

export default GamePage;