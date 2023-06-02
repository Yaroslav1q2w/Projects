import styled from "styled-components";

export const Container = styled.section`
	position: relative;

	.page__card-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 660px;
		background-size: cover;

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			z-index: 1;
			height: 100%;
			width: 100%;
			background-color: rgba(0, 0, 0, 0.8);
		}
	}
`;

export const ContainerWrapp = styled.div`
	position: absolute;
	z-index: 1;
	width: 100%;
	padding: 30px;
	box-sizing: border-box;
`;

export const MainWrapp = styled.div`
	position: relative;
	max-width: 1100px;
	margin: 0 auto;
	line-height: 1.7;
	letter-spacing: 1.5px;
	word-spacing: 1px;
	padding-bottom: 50px;
	padding-top: 120px;

	.main__wrap-header {
		display: flex;
		align-items: top;
	}

	.btn-back {
		position: absolute;
		top: 16px;
		display: block;
		width: 36px;
		transform: rotate(180deg);

		&:hover,
		&:focus {
			svg {
				transform: translateX(10px);
			}
		}

		svg {
			fill: #fff;
			transform: translateX(0);
			transition: transform 0.8s;
		}
	}
`;

export const HeaderPoster = styled.div`
	padding-right: 30px;

	width: 680px;
	flex-shrink: 0;

	img {
		width: 100%;
	}
`;

export const HeaderContent = styled.div`
	padding: 20px 40px;
	color: #fff;
	width: 100%;

	.colored {
		font-size: 17px;
		font-weight: 400;
		padding-left: 10px;
	}
`;

export const PageInfo = styled.div`
	margin-top: 14px;
	font-size: 17px;
	padding-top: 20px;
`;

export const Title = styled.h2`
	font-size: 38px;
	font-weight: 700;
	text-align: center;
	margin-bottom: 10px;
	text-shadow: 3px 3px 2px #5b5b5d;
	display: block;
	text-align: center;
`;

export const FooterButton = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	left: 300px;
	margin-bottom: 50px;

	.footer__button-elem {
		font-family: "Montserrat", sans-serif;
		font-style: normal;
		color: #fafafa;
		padding: 12px 14px;
		background: #00481e;
		border: 0;
		border-radius: 30px;
		outline: none;
		margin: 6px;
		cursor: pointer;
		transition: 0.5s;
		letter-spacing: 0.8px;

		&:hover {
			background: #01722b;
		}
	}
`;
