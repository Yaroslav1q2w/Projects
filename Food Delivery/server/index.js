const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const apiProducts = require("./routers/products.api");
const apiOrders = require("./routers/orders.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4444;

const MONGO_URL =
	"mongodb+srv://user:user@cluster0.y1d6xtb.mongodb.net/?retryWrites=true&w=majority";

app.use("/api", apiProducts);
app.use("/api", apiOrders);

app.all("*", (request, response) => {
	response.status(404).send("resource not found");
});

const start = async () => {
	try {
		mongoose
			.connect(MONGO_URL, {
				useNewUrlParser: true,
			})
			.then(() => {
				console.log("DB OK");
			})
			.catch((err) => console.log("DB error", err));

		app.listen(PORT, () => {
			console.log(`Server is running on :${PORT}`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
