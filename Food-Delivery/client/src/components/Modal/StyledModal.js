import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;

	opacity: 0;
	animation: ani 0.5s forwards;

	@keyframes ani {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const MainWrapp = styled.div`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	background-color: #5b5b5b;
	width: 400px;
	border-radius: 5px;
	transform: scale(1);
	transition: 0.5s;
	box-shadow: 0 0 8px #5b5b5b;
`;

export const Header = styled.header`
	background-color: #3a3939;
	text-align: left;
	color: #ffffff;
	padding: 15px 30px;
	font-size: 17px;
	position: relative;
	letter-spacing: 1px;
	word-spacing: 1px;

	.modal__icon-delete {
		position: absolute;
		right: 11px;
		top: 12px;
		width: 32px;
		height: 32px;
		cursor: pointer;

		&:hover {
			opacity: 1;
		}
		&:before,
		&:after {
			position: absolute;
			left: 15px;
			content: " ";
			height: 25px;
			width: 2px;
			background-color: #fffefe;
		}
		&:before {
			transform: rotate(45deg);
		}
		&:after {
			transform: rotate(-45deg);
		}
	}
`;

export const Content = styled.div`
	color: #ffffff;
	font-size: 15px;
	line-height: 1.3;
	padding: 26px;
	letter-spacing: 1px;
`;

export const ModalButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;

	.button {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		width: 140px;
		height: 35px;
		color: #fafafa;
		background: #26264f;
		border: 0;
		border-radius: 10px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;

		&:hover {
			background: #323275;
		}
	}
`;
