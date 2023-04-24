import styled from "styled-components";

export const Container = styled.section`
	text-align: center;
	max-width: 1100px;
	margin: 0 auto;
	padding-bottom: 50px;
`;

export const TitleFavourite = styled.h2`
	font-size: 30px;
	font-weight: bold;
`;

export const FavoriteItems = styled.div`
	padding-top: 60px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: stretch;
	gap: 20px;
	position: relative;

	.empty-favorite {
		position: absolute;
		top: 100px;
		left: 480px;
	}
`;
