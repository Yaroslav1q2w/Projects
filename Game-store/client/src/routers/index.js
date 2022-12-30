import React from 'react';
import {Route, Routes} from "react-router-dom";
import Cards from "../components/Cards";
import Basket from "../pages/Basket";
import Favorite from "../pages/Favorite";
import GamePage from "../pages/GamePage"

const RootRouter = () => {
    return (
        <Routes>
            <Route index element={<Cards/>} />
            <Route path="api/basket" element={<Basket/>} />
            <Route path="api/favorite" element={<Favorite/>} />
            <Route path="api/products/:card_id" element={<GamePage/>} />
        </Routes>
    );
};

export default RootRouter;