const { model, mongoose } = require("mongoose");

const product = new mongoose.Schema({
	image: {
		type: String,
		require: true,
	},
	title: {
		type: String,
		require: true,
	},
	price: {
		type: Number,
		require: true,
	},
	article: {
		type: Number,
		require: true,
	},
	count: {
		type: Number,
		require: true,
	},
	developer: {
		type: String,
		require: true,
	},
	description: {
		type: String,
		require: true,
	},
	calories: {
		type: String,
		require: true,
	},
	category: {
		type: Number,
		require: true,
	},
});

module.exports = model("Product", product);
