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
		"Все",
		"Шутер",
		"Экшен",
		"Приключения",
		"Спорт",
		"Гонки",
		"Стратегии",
	];

	const onChengeCategory = (index: number) => {
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
