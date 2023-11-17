const { Router } = require("express");
const router = Router();
const jwtMiddleware = require("../middleware/jwtMiddleware");
const Product = require("../models/product.mongoose");

router.get("/products", async (request, response) => {
	const { category } = request.query;

	const limit = request.query._limit;
	const page = request.query._page || 1;

	if (!category) {
		const productsAll = await Product.find()
			.skip((page - 1) * limit)
			.limit(limit);

		const count = await Product.find().countDocuments();

		response.status(200).json({
			success: true,
			data: productsAll,
			totalPages: Math.ceil(count / limit),
		});
	} else {
		const productsCategory = await Product.find({
			category: category,
		})
			.skip((page - 1) * limit)
			.limit(limit);

		const count = await Product.find({ category: category }).countDocuments();
		console.log(count);

		response.status(200).json({
			success: true,
			data: productsCategory,
			totalPages: Math.ceil(count / limit),
		});
	}
});

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

router.post("/add-to-product", jwtMiddleware, async (req, res) => {
	try {
		const { productId } = req.body;
		const userId = req.user.id; // userId доступний через middleware

		const user = await Register.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "Користувач не знайдений" });
		}

		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ message: "Товар не знайдений" });
		}

		user.shoppingCart.push(product);
		await user.save();

		res.json({ success: true, message: "Товар додано до кошика" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Помилка сервера" });
	}
});

router.post("/add-to-favorites", jwtMiddleware, async (req, res) => {
	try {
		const { productId } = req.body;
		const userId = req.user.id;

		const user = await Register.findById(userId);

		if (!user) {
			return res.status(404).json({ message: "Користувач не знайдений" });
		}

		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ message: "Товар не знайдений" });
		}

		user.selectedProducts.push(product);
		await user.save();

		res.json({ success: true, message: "Товар додано до вибраних" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Помилка сервера" });
	}
});

module.exports = router;
