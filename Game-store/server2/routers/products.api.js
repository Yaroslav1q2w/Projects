const { Router } = require("express");
const router = Router();

const Product = require("../moduls/product.mongoose");

router.get("/products", async (request, response) => {
	const { category } = request.query;

	const limit = request.query._limit || 9;
	const page = request.query._page || 1;

	if (!category) {
		const productsAll = await Product.find()
			.skip((page - 1) * limit)
			.limit(limit);

		response.status(200).json({ success: true, data: productsAll });
	} else {
		const productsCategory = await Product.find({
			category: category,
		})
			.skip((page - 1) * limit)
			.limit(limit);

		response.status(200).json({ success: true, data: productsCategory });
	}
});

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

module.exports = router;
