const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
	const token = req.header("x-auth-token");

	if (!token) {
		return res.status(401).json({ message: "Немає токену, доступ заборонено" });
	}

	try {
		const decoded = jwt.verify(token, "secretKey");

		req.user = decoded;

		next();
	} catch (error) {
		res.status(401).json({ message: "Невірний токен, доступ заборонено" });
	}
};

module.exports = jwtMiddleware;
