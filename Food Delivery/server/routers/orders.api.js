const { Router } = require("express");
const router = Router();

const Order = require("../models/orders.mongoose");

router.post("/orders", async (request, response) => {
	try {
		const { name, lastName, region, phone, products } = request.body;

		const newUser = new Order({
			name,
			lastName,
			region,
			phone,
			products,
		});

		const savedUser = await newUser.save();

		response.status(201).json({
			success: true,
			data: savedUser,
		});
	} catch (error) {
		response.status(500).json({
			success: false,
			error: "Сталася помилка при створенні замовлення",
		});
	}
});

router.get("/orders", async (request, response) => {
	try {
		const customerAll = await Order.find();

		response.status(200).json(customerAll);
	} catch (error) {
		response.status(500).json({
			success: false,
			error: "Сталася помилка при запиту на отримання замовлень",
		});
	}
});

module.exports = router;
