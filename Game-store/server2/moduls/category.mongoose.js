const { Schema, model, mongoose } = require("mongoose");

const categoryGame = new mongoose.Schema({
	category: { type: Number, require: true },
	title: { type: String, require: true },
});

module.exports = model("CategoryGame", categoryGame);
