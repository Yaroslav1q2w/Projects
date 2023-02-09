import React from "react";
import styled from "styled-components";

export const CategoryWrap = styled.div`
	margin-left: 30px;
	margin-bottom: 46px;
`;

export const CategoryList = styled.ul`
	display: flex;
	list-style: none;
	font-family: Consolas;
`;

export const LineItemTop = styled.span`
	top: 0;
	left: -180px;
	width: 100%;
	height: 1px;
	background: linear-gradient(90deg, transparent, #2196f3);
`;
export const LineItemRight = styled.span`
	top: -100%;
	right: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(180deg, transparent, #2196f3);
`;
export const LineItemBottom = styled.span`
	bottom: 0;
	right: -180px;
	width: 100%;
	height: 1px;
	background: linear-gradient(270deg, transparent, #2196f3);
`;
export const LineItemLeft = styled.span`
	bottom: -100%;
	left: 0;
	width: 1px;
	height: 100%;
	background: linear-gradient(0deg, transparent, #2196f3);
`;

export const CategoryListItem = styled.li`
	position: relative;
	color: #2196f3;
	text-transform: uppercase;
	font-weight: 600;
	font-size: 15px;
	letter-spacing: 1.5px;
	overflow: hidden;
	padding: 12px;
	margin-left: 8px;
	transition: 0.3s;
	cursor: pointer;
	border-radius: 8px;

	&:hover ${LineItemTop} {
		left: 160px;
		transition: 1s;
	}

	&:hover ${LineItemBottom} {
		right: 160px;
		transition: 1s;
	}

	&:hover ${LineItemLeft} {
		bottom: 100%;
		transition: 1s;
	}

	&:hover ${LineItemRight} {
		top: 100%;
		transition: 1s;
	}

	&.active {
		transition-delay: 0.3s;
		box-shadow: 0 0 10px #2196f3;
		//background-color: #2196f3 ;
		//color: rgb(25,26,28);
	}

	span {
		position: absolute;
		display: block;
	}
`;
