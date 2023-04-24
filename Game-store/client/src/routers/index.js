import { Route, Routes } from "react-router-dom";
import Cards from "../components/Cards";
import Basket from "../pages/Basket";
import Favourite from "../pages/Favourite";
import GamePage from "../pages/GamePage";

const RootRouter = () => {
	return (
		<Routes>
			<Route index element={<Cards />} />
			<Route path="api/basket" element={<Basket />} />
			<Route path="api/favorite" element={<Favourite />} />
			<Route path="api/products/:card_id" element={<GamePage />} />
		</Routes>
	);
};

export default RootRouter;
