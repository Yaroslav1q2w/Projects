import styled from "styled-components";

export const Wrapper = styled.div`
	color: white;
	width: 100%;
	position: relative;
	margin-bottom: 20px;
	padding-bottom: 20px;
	justify-self: center;
	display: flex;
	border-bottom: 1px solid #343434;

	img {
		min-width: 320px;
		height: 180px;
	}
`;

export const ItemDetails = styled.div`
	padding: 10px 20px;
	position: relative;
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;

	.basket__item-title {
		padding-top: 10px;
		font-size: 24px;
		font-weight: bold;
		margin: 0;
		transition: 0.3s;

		&:hover {
			color: #777777;
			transition: 0.3s;
		}
	}

	.basket__item-article {
		display: inline-block;
		padding-top: 8px;
		font-size: 12px;
		font-weight: 200;
		color: #7a7a7a;
	}
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	position: relative;

	.item__price {
		position: absolute;
		right: 15px;
		font-size: 20px;
		bottom: 50px;
	}

	.item__remove {
		cursor: pointer;
		position: absolute;
		top: 64px;
		right: 15px;
	}

	.item-genre {
		background-color: rgb(47, 47, 51);
		font-size: 13px;
		font-weight: 600;
		display: inline-block;
		padding: 5px 20px;
		border-radius: 4px;
		letter-spacing: 1.5px;
		color: #fff;
		box-shadow: 0 0 4px #2196f3;
		position: relative;
		top: 68px;
	}
`;
