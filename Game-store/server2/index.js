const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const apiRouter = require("./routers/products.api");
const usersApiRouter = require("./routers/users.api");
const authApiRouter = require("./routers/auth.api");

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(
	session({
		secret: "some secret value",
		resave: false,
		saveUninitialized: false,
	})
);

const PORT = process.env.PORT || 5000;

const MONGO_URL =
	"mongodb+srv://admin:admin@cluster0.vqljl7l.mongodb.net/node-blog?retryWrites=true&w=majority";

app.use("/api", apiRouter);
app.use("/api", urlencodedParser, usersApiRouter);
app.use("/auth", urlencodedParser, authApiRouter);

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
