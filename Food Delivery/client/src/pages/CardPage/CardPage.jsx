import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isModalSelector } from "../../selectors";
import { increaseBasket, modalClose, modalOpen } from "../../reducers";
import { ReactComponent as RightArrow } from "./images/right-arrow.svg";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";
import {
	Container,
	ContainerWrapp,
	MainWrapp,
	HeaderPoster,
	HeaderContent,
	FooterButton,
	Title,
	PageInfo,
} from "./StyledCardPage";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import { sendRequest } from "../../helpers/sendRequest";
import { API_URL } from "../../configs/API";

const Loader = styled(Box)`
	z-index: 10;
	position: relative;
`;

const CardPage = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);
	const [card, setCard] = useState({});
	const [loader, setLoader] = useState(true);

	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const { card_id } = useParams();
	const dispatch = useDispatch();
	const modal = useSelector(isModalSelector);

	useEffect(() => {
		sendRequest(`${API_URL}/api/products/${card_id}`).then((data) => {
			setCard(data);
			setLoader(false);
		});

		window.scrollTo(0, 0);
	}, [card_id]);

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
				<Container>
					<div
						className="page__card-img"
						style={{ backgroundImage: `url(${card?.image})` }}
					/>
					<ContainerWrapp>
						<MainWrapp>
							<div className="main__wrap-header">
								<Link className="btn-back" onClick={goBack}>
									<RightArrow />
								</Link>
								<HeaderPoster>
									<img src={card.image} alt={card.title} />
								</HeaderPoster>
								<HeaderContent>
									<Title>{card.title}</Title>
									<PageInfo>{card.calories}</PageInfo>
									<PageInfo>{card.developer}</PageInfo>
									<PageInfo>{card.description}</PageInfo>
								</HeaderContent>
							</div>
						</MainWrapp>

						<FooterButton>
							<Button
								children="Добавить в корзину"
								className="footer__button-elem"
								onClick={() => {
									dispatch(modalOpen());
									setSelectedProduct(card);
								}}
							/>
						</FooterButton>
					</ContainerWrapp>

					{modal && (
						<Modal
							data-testid="modal-add-basket"
							header="Подтвердите добавление"
							text={`Добавить ${selectedProduct.title} в корзину?`}
							closeModal={() => dispatch(modalClose())}
							onClick={() => dispatch(increaseBasket(selectedProduct))}
						/>
					)}
				</Container>
			)}
		</>
	);
};

export default CardPage;
