import styled from "styled-components";

export const ContainerForm = styled.div`
	background: rgba(50, 61, 109, 0.5);
	border: 0.5px solid rgba(255, 255, 255, 0.3);
	box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(5px);
	border-radius: 20px;
	padding: 20px;
	width: 360px;
	position: absolute;
	top: 40px;
	right: 25px;

	transform: translateY(-150%);
	animation: modal 1s forwards;

	@keyframes modal {
		0% {
			transform: translateY(-150%);
		}
		100% {
			transform: translateY(0);
		}
	}

	.form__button {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		width: 140px;
		height: 35px;
		color: #fafafa;
		background: #034f60;
		border: 0;
		border-radius: 30px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.4s;

		&:hover {
			transform: translateY(2px);
			box-shadow: 2px -2px 10px #717171;
			background: #04667c;
		}
		&:active {
			transform: translateY(0);
			box-shadow: 0 0 5px #717171;
		}
	}
`;

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 16px;

	.header__title {
		font-size: 18px;
		line-height: 1;
		margin: 0;
		padding-left: 20px;
	}

	.close__form {
		cursor: pointer;
	}
`;
