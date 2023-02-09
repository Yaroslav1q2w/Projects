import { validationResult } from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../../server/models/users.js";
import jwt from "jsonwebtoken";

export const register = async (res, req) => {
	try {
		const errors = validationResult(req);
		if (!errors.$isEmpty()) {
			return res.status(400).join(errors.array());
		}

		const password = req.body.password;
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(password, salt);

		const doc = new UserModel({
			email: req.body.email,
			fullname: req.body.fullname,
			passwordHash: hash,
		});

		const user = await doc.save();

		const token = jwt.sign(
			{
				_id: user._id,
			},
			"secret123",
			{
				expiresIn: "30d",
			}
		);

		const { passwordHash, ...userData } = user._doc;

		res.json({
			...userData,
			token,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось зарегистрироваться",
		});
	}
};
