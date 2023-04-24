import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isModalSelector } from "../../selectors";
import { increaseBasket, modalClose, modalOpen } from "../../reducers";
import { ReactComponent as RightArrow } from "./images/right-arrow.svg";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";

import "./GamePage.scss";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { sendRequest } from "../../helpers/sendRequest";
import { API_URL } from "../../configs/API";

const Loader = styled(Box)`
	z-index: 10;
	position: relative;
`;

const GamePage = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [game, setGame] = useState({});
	const [loader, setLoader] = useState(true);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const { card_id } = useParams();
	const dispatch = useDispatch();
	const modal = useSelector(isModalSelector);

	useEffect(() => {
		sendRequest(`${API_URL}/products/${card_id}`).then((data) => {
			setGame(data);
			setLoader(false);
		});

		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			{loader ? (
				<Loader
					sx={{
						display: "flex",
						mt: 16,
						justifyContent: "center",
						color: "grey.500",
					}}
				>
					<CircularProgress color="inherit" size={90} />
				</Loader>
			) : (
				<section className="page__game">
					<div
						className="page__game-img"
						style={{ backgroundImage: `url(${game.image})` }}
					/>
					<div className="container__wrap">
						<main className="main__wrap">
							<div className="main__wrap-header">
								<Link className="btn-back" onClick={goBack}>
									<RightArrow />
								</Link>
								<div className="header__poster">
									<img src={game.image} alt={game.title} />
								</div>
								<div className="header__content">
									<p className="game__page-title">{game.title}</p>
									<p className="game__page-subname">{game.title}</p>
									<p className="game__page-info">
										Жанр:<span className="colored">{game.genre}</span>
									</p>
									<p className="game__page-info">
										Дата выпуска:
										<span className="colored">{game.data}</span>
									</p>
									<p className="game__page-info">
										Разработчик:
										<span className="colored">{game.developer}</span>
									</p>
									<p className="game__page-info">
										Платформы:
										<span className="colored">{game.platforms}</span>
									</p>
									<p className="game__page-info">
										Языки интерфейса:
										<span className="colored">{game.language}</span>
									</p>
								</div>
							</div>
							<div className="game__page-description">{game.the_plot}</div>
						</main>

						<div className="footer__button">
							<Button
								children="Добавить в корзину"
								className="footer__button-elem"
								onClick={() => {
									dispatch(modalOpen());
									setSelectedProduct(game);
								}}
							/>
						</div>
					</div>

					{modal && (
						<Modal
							data-testid="modal-add-basket"
							header="Подтвердите добавление"
							text={`Добавить ${selectedProduct.title} в корзину?`}
							closeModal={() => dispatch(modalClose())}
							onClick={() => dispatch(increaseBasket(selectedProduct))}
						/>
					)}
				</section>
			)}
		</>
	);
};

export default GamePage;
