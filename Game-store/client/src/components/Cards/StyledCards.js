import styled from "styled-components";

export const Container = styled.section`
	position: relative;
	max-width: 1100px;
	margin: 50px auto;
`;

export const SectionGames = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 0 26px;
	gap: 20px 40px;
	margin-bottom: 20px;

	@media screen and (max-width: 700px) {
		gap: 10px 20px;
		padding: 30px 10px;
	}
`;
