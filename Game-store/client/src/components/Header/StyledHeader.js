import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";

export const HeaderContainer = styled.header`
	background-color: #282828;
	box-shadow: 0px 8px 10px 0px #282828;
`;

export const HeaderWrapp = styled.header`
	height: 80px;
	max-width: 1180px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;

	.header__logo {
		.logo {
			font-size: 34px;
			font-weight: bold;
			padding-bottom: 3px;
			text-shadow: 2px 2px 1px #995400;
			color: #ffd700;
			margin: 0;

			@media screen and (max-width: 600px) {
				font-size: 26px;
			}
		}

		&-text {
			font-size: 10px;
			font-weight: 600;
			text-transform: uppercase;
			text-shadow: 1px 1px 1px #5b5b5d;
			color: #c0c0c0;

			@media screen and (max-width: 600px) {
				font-size: 8px;
			}
		}
	}

	@media screen and (max-width: 600px) {
	}
`;

export const HeaderDescription = styled.div`
	display: flex;
	align-items: center;

	.header__favorite {
		padding: 5px;
		font-size: 14px;
		cursor: pointer;

		@media screen and (max-width: 500px) {
			padding: 2px;
		}
	}

	.header__basket {
		padding: 5px;
		cursor: pointer;
		font-size: 14px;

		@media screen and(max-width: 500px) {
			padding: 2px;
		}
	}

	.header__homepage {
		padding-right: 12px;
		cursor: pointer;

		@media screen and (max-width: 500px) {
			padding: 9px;
		}
	}
`;

export const HomeIcon = styled(AiOutlineHome)`
	font-size: 28px;

	@media screen and (max-width: 500px) {
		font-size: 24px;
	}
`;

export const FavouriteIcon = styled(FaStarHalfAlt)`
	font-size: 24px;

	@media screen and (max-width: 500px) {
		font-size: 20px;
	}
`;

export const ShoppingCartIcon = styled(BiCartAlt)`
	font-size: 25px;

	@media screen and (max-width: 500px) {
		font-size: 21px;
	}
`;
