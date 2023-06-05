const { model, mongoose } = require("mongoose");

const order = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	region: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
		},
	],
});

module.exports = model("Order", order);
