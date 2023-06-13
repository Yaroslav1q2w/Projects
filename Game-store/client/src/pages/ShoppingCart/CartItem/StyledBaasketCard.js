import styled from "styled-components";
import {
	IoIosAddCircleOutline,
	IoIosRemoveCircleOutline,
} from "react-icons/io";

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
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 34px;
	position: relative;
	width: 100%;
`;

export const HeaderWrapp = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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

export const PriceItem = styled.p`
	font-size: 20px;
`;

export const Description = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;
	font-size: 14px;
	position: relative;

	.item__remove {
		cursor: pointer;
	}

	.item-developer {
		background-color: rgb(47, 47, 51);
		font-size: 13px;
		font-weight: 600;
		display: inline-block;
		padding: 5px 20px;
		border-radius: 4px;
		letter-spacing: 1.5px;
		color: #cd853f;
		box-shadow: 0 0 10px #ffd700;
	}
`;

export const CounterWrap = styled.div`
	display: flex;
	align-items: center;
	position: absolute;
	left: 360px;

	.count {
		font-size: 16px;
	}
`;

export const IconIncrease = styled(IoIosAddCircleOutline)`
	color: #cd853f;
	cursor: pointer;
	margin: 12px;
`;

export const IconDecrease = styled(IoIosRemoveCircleOutline)`
	color: #cd853f;
	cursor: pointer;
	margin: 12px;
`;
