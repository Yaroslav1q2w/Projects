import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import CardPage from "../pages/CardPage";

const RootRouter = () => {
	return (
		<Routes>
			<Route index element={<Cards />} />
			<Route path="api/basket" element={<ShoppingCart />} />
			<Route path="api/products/:card_id" element={<CardPage />} />
		</Routes>
	);
};

export default RootRouter;
