import styled from "styled-components";

export const HeaderContainer = styled.header`
	background-color: #282828;
`;

export const HeaderWrapp = styled.header`
	height: 80px;
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.header__logo {
		.logo {
			font-size: 34px;
			font-weight: bold;
			padding-bottom: 3px;
			text-shadow: 2px 2px 1px #995400;
			color: #ffd700;
		}

		&-text {
			font-size: 10px;
			font-weight: 600;
			text-transform: uppercase;
			text-shadow: 1px 1px 1px #5b5b5d;
			color: #c0c0c0;
		}
	}
`;

export const HeaderDescription = styled.div`
	display: flex;
	align-items: center;

	.header__favorite {
		padding: 5px;
		cursor: pointer;
	}

	.header__basket {
		padding: 5px;
		cursor: pointer;
	}

	.header__homepage {
		padding-right: 12px;
		cursor: pointer;
	}
`;
