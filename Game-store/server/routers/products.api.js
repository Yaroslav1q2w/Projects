const { Router } = require("express");
const router = Router();
const jwtMiddleware = require("../middleware/jwtMiddleware");
const Product = require("../models/product.mongoose");

// Отримуємо всі продукти

router.get("/allProducts", async (request, response) => {
	const productsAll = await Product.find();
	response.status(200).json({
		success: true,
		data: productsAll,
	});
});

// Отримуємо всі продукти по сторінкам та категоріям

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

// Отримуємо один продукт

router.get("/products/:id", async (request, response) => {
	Product.findById(request.params.id, request.body).then((result) => {
		response.status(200).json(result);
	});
});

// Створюємо новий продукт

router.post("/products", async (request, response) => {
	try {
		const newProductData = request.body;
		const newProduct = new Product(newProductData);
		const savedProduct = await newProduct.save();

		response.status(201).json({
			success: true,
			data: savedProduct,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			error: error.message,
		});
	}
});

module.exports = router;
