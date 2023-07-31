import styled from "styled-components";

export const CategoryWrap = styled.div`
	margin-left: 30px;
	margin-bottom: 46px;
`;

export const CategoryList = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
`;

export const CategoryListItem = styled.li`
	position: relative;
	color: #fff5cc;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 13px;
	letter-spacing: 1.5px;
	overflow: hidden;
	padding: 12px;
	margin-left: 8px;
	transition: 0.3s;
	cursor: pointer;
	border-radius: 8px;

	&.active {
		transition-delay: 0.2s;
		background-color: #98b95f;
		box-shadow: 0 0 10px #98b95f, 0 0 10px #98b95f;
		color: rgb(25, 26, 28);
	}

	&:hover {
		transition-delay: 0.3s;
		box-shadow: 0 0 10px #98b95f;
	}

	span {
		position: absolute;
		display: block;
	}
`;
