const { Schema, model, mongoose } = require("mongoose");

const registerSchema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	login: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	address: {
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	selectedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	shoppingCart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	created_at: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model("Register", registerSchema);
