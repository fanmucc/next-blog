const mongoose = require("mongoose");

let BlogSchema;
let MongoBlog;

if (mongoose.models.Blog) {
	MongoBlog = mongoose.model("Blog");
} else {
	BlogSchema = new mongoose.Schema({
		title: String,
		categories: Array,
		tags: Array,
		themeColor: String,
		img: String,
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	});

	// 在保存文档之前更新修改时间
	BlogSchema.pre("save", function (next) {
		BlogSchema.updatedAt = new Date();
		next();
	});

	MongoBlog = mongoose.model("Blog", BlogSchema);
}

module.exports = MongoBlog;
