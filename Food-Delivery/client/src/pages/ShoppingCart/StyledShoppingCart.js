import styled from "styled-components";

export const Container = styled.section`
	text-align: center;
	position: relative;
	max-width: 1100px;
	margin: 0 auto;
`;

export const Header = styled.header`
	.total__price {
		position: absolute;
		top: 50px;
		left: 20px;
		letter-spacing: 1px;
		word-spacing: 1px;
		font-size: 18px;
		border: 1px solid #cd853f;
		padding: 10px 20px;
		border-radius: 20px;
	}

	p {
		font-size: 30px;
		font-weight: bold;
	}
`;

export const ButtonSubmit = styled.div`
	position: absolute;
	right: 20px;
	top: 44px;

	.basket__button-elem {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		padding: 12px;
		color: #ffdab9;
		background: #a0522d;
		border: 0;
		border-radius: 30px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;

		&:hover {
			background: #623a00;
		}
	}
`;

export const BasketItems = styled.main`
	padding-top: 100px;
	display: grid;

	.empty-basket {
		font-size: 30px;
		font-weight: bold;
	}
`;
