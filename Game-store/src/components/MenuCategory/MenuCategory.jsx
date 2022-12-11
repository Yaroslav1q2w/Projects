import React, {useState} from 'react';
import {
    CategoryList,
    CategoryListItem,
    CategoryWrap,
    LineItemBottom,
    LineItemLeft,
    LineItemRight,
    LineItemTop
} from "./styled";



const MenuCategory = () => {
    const [activeIndex,setActiveIndex] = useState(0)

    const categories = ["Все", "Шутер", "Экшен", "Приключения", "Гонки", "Стратегии", "Спорт"]


    return (
        <CategoryWrap>
            <CategoryList>
                {categories.map((item,index) => (
                    <CategoryListItem className={activeIndex === index ? "active" : ""} onClick={() => setActiveIndex(index)} key={index}>
                        <LineItemTop/>
                        <LineItemRight/>
                        <LineItemBottom/>
                        <LineItemLeft/>
                        {item}
                    </CategoryListItem>))}
            </CategoryList>
        </CategoryWrap>
    );
};

export default MenuCategory;