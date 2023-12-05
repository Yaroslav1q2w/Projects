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
	isAdmin: {
		type: Boolean,
		default: false,
	},
	phone: {
		type: String,
	},
	age: {
		type: Number,
	},
	selectedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	shoppingCart: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
	created_at: {
		type: Date,
		default: Date.now,
	},
	region: {
		type: String,
	},
});

module.exports = model("Register", registerSchema);
