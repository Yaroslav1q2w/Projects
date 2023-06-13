import styled from "styled-components";

export const Wrapper = styled.div`
	color: white;
	position: relative;
	margin-bottom: 20px;
	display: flex;

	&:nth-child(odd) {
		border-right: 1px solid #343434;
	}
`;

export const ItemDetails = styled.div`
	padding: 0 20px;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Header = styled.div`
	text-align: start;

	.favorite__item-title {
		padding-top: 5px;
		font-size: 20px;
		font-weight: bold;
		margin: 0;
		transition: 0.3s;

		&:hover {
			color: #777777;
			transition: 0.3s;
		}
	}

	.favorite__item-article {
		display: inline-block;
		padding-top: 8px;
		font-size: 12px;
		font-weight: 200;
		color: #7a7a7a;
	}

	.favorite__item-genre {
		font-size: 14px;
		font-weight: 600;
		padding: 3px 10px;
		letter-spacing: 1.5px;
		color: #2196f3;
		display: block;
		margin-top: 20px;
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	position: relative;

	.favorite__item-price {
		font-size: 16px;
	}

	.close-card {
		cursor: pointer;
	}
`;
