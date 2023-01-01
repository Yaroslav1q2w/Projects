const { Router } = require("express");
const router = Router();

const Product = require("../moduls/product.mongoose");
const CategoryGame = require("../moduls/category.mongoose");

router.get("/products", async (request, response) => {
	const { category } = request.query;

	if (!category) {
		const productsAll = await Product.find();

		response.status(200).json({ success: true, data: productsAll });
	} else {
		const productsCategory = await Product.find({ category: category });

		response.status(200).json({ success: true, data: productsCategory });
	}

	// const products = await Product.find();

	// response.status(200).json({ success: true, data: products });
});

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

// router.get("/category", async (request, response) => {
// 	const { category } = request.query;
// 	let result;
// 	// result = await CategoryGame.find({ category: category });

// 	// response.status(200).json({ success: true, data: result });

// 	if (!category) {
// 		result = await CategoryGame.find();
// 	} else {
// 		result = await CategoryGame.find({ category: category });
// 	}
// 	return response.status(200).json({ success: true, data: result });
// });

module.exports = router;
