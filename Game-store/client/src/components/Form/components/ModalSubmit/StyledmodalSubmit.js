import styled from "styled-components";

export const ModalContainer = styled.div`
	height: 100%;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
`;

export const ModalWrapp = styled.div`
	font-family: "Montserrat", sans-serif;
	font-style: normal;
	background-color: #5d3131;
	max-width: 400px;
	border-radius: 20px;
	z-index: 1;
	text-align: center;
	margin: 0 10px;

	.modal__submit-content {
		color: #ffffff;
		font-size: 17px;
		line-height: 1.5;
		padding: 15px 15px 20px 15px;
		letter-spacing: 1px;

		hr {
			margin: 10px 0 10px 0;
		}
	}
`;

export const ButtonContainer = styled.div`
	padding-bottom: 10px;

	.button__submit_form {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		width: 140px;
		height: 35px;
		color: #fafafa;
		//background: linear-gradient(to left, #16162d, #012344,#16162d);
		background: #9b2a05;
		border: 0;
		border-radius: 20px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;

		&:hover {
			background: #016c1f;
		}
	}
`;
