const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Register = require("../models/register.mongoose");
const generateSecretKey = require("../configs/generateSecretKey");

router.post("/customers", async (req, res) => {
	const { firstName, lastName, login, email, password, address, isAdmin } =
		req.body;

	try {
		const existingLogin = await Register.findOne({ login });
		if (existingLogin) {
			return res
				.status(400)
				.json({ message: "Користувач з таким логіном вже існує" });
		}

		const existingEmail = await Register.findOne({ email });
		if (existingEmail) {
			return res
				.status(400)
				.json({ message: "Користувач з таким email вже існує" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newCustomer = new Register({
			firstName,
			lastName,
			login,
			email,
			password: hashedPassword,
			address,
			isAdmin,
		});

		const savedCustomer = await newCustomer.save();

		const secretKey = generateSecretKey();
		const token = jwt.sign(
			{
				id: savedCustomer._id,
				firstName: savedCustomer.firstName,
				lastName: savedCustomer.lastName,
				login: savedCustomer.login,
				email: savedCustomer.email,
				address: savedCustomer.address,
				isAdmin: savedCustomer.isAdmin,
			},
			secretKey,
			{}
		);

		res.json({
			token,
			customer: savedCustomer,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Помилка сервера" });
	}
});

module.exports = router;
