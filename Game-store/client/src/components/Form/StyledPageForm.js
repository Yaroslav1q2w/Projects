import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

export const ContainerForm = styled.div`
	background: rgba(50, 61, 109, 0.5);
	border: 0.5px solid rgba(255, 255, 255, 0.3);
	box-shadow: 0 50px 100px rgba(0, 0, 0, 0.25);
	backdrop-filter: blur(5px);
	border-radius: 20px;
	padding: 20px;
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

	.btn__form {
		display: flex;
		justify-content: center;
	}

	.form-control {
		color: #dad9d9;
		padding: 10px;
		border: 0.5px solid rgba(255, 255, 255, 0.3);
		background: linear-gradient(
			180deg,
			rgba(100, 106, 150, 0.4) 0%,
			rgba(182, 186, 214, 0.25) 100%
		);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
		border-radius: 30px;
		outline: none;
		width: 270px;

		&:hover,
		&:focus {
			border-color: #1e9834;
			box-shadow: 0 0 0 0.25rem rgba(0, 236, 10, 0.25);
		}

		@media screen and (max-width: 400px) {
			width: 220px;
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

	@media screen and (max-width: 400px) {
		right: 18px;
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

		@media screen and (max-width: 400px) {
			font-size: 14px;
		}
	}

	.close__form {
		cursor: pointer;
	}
`;

export const CloseItemForm = styled(IoCloseSharp)`
	font-size: 36px;

	@media screen and (max-width: 400px) {
		font-size: 26px;
	}
`;
