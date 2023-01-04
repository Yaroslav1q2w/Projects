import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageCount } from "../../reducers";
import { pageCountSelector } from "../../selectors";

import { PagesList, PagesListItem, PagesWrap } from "./StyledPagination";

const Pagination = () => {
	const dispatch = useDispatch();
	const pageCount = useSelector(pageCountSelector);

	const pages = [1, 2, 3, 4, 5];

	return (
		<PagesWrap>
			<PagesList>
				{pages.map((item, index) => (
					<PagesListItem
						className={pageCount === item ? "active" : ""}
						onClick={() => dispatch(setPageCount(item))}
						key={index}
					>
						{item}
					</PagesListItem>
				))}
			</PagesList>
		</PagesWrap>
	);
};

export default Pagination;
