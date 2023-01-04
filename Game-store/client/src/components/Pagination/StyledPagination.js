import styled from "styled-components";

export const PagesWrap = styled.div`
	margin-left: 40px;
	margin-bottom: 60px;
`;

export const PagesList = styled.ul`
	display: flex;
	list-style: none;
	font-family: Consolas;
`;

export const PagesListItem = styled.li`
	position: relative;
	color: #2196f3;
	text-transform: uppercase;
	font-size: 19px;
	font-weight: 600;
	letter-spacing: 1.5px;
	padding: 10px 16px;
	margin-left: 8px;
	transition: 0.2s;
	cursor: pointer;
	border-radius: 16px;
	box-shadow: 0 0 4px #2196f3;

	&.active {
		transition-delay: 0.2s;
		box-shadow: 0 0 10px #2196f3, 0 0 20px #2196f3;
		background-color: #2196f3;
		color: rgb(25, 26, 28);
	}

	span {
		position: absolute;
		display: block;
	}
`;
