import { useDispatch, useSelector } from "react-redux";
import { chengeCategory, setPageCount } from "../../reducers";
import { categorySelector } from "../../selectors";

import {
	CategoryList,
	CategoryListItem,
	CategoryWrap,
} from "./StyledMenuCategory";

const MenuCategory = () => {
	const dispatch = useDispatch();
	const indexCategory = useSelector(categorySelector);

	const categories = [
		"All",
		"McDonald's",
		"БУЛКА і КОТЛЕТА",
		"Monoпіца",
		"Gaga",
	];

	const onChengeCategory = (index) => {
		dispatch(chengeCategory(index));
		dispatch(setPageCount(1));
	};

	return (
		<CategoryWrap>
			<CategoryList>
				{categories.map((item, index) => (
					<CategoryListItem
						className={indexCategory === index ? "active" : ""}
						onClick={() => onChengeCategory(index)}
						key={index}
					>
						{item}
					</CategoryListItem>
				))}
			</CategoryList>
		</CategoryWrap>
	);
};

export default MenuCategory;
