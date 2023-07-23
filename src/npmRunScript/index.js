const mongoose = require("mongoose");

const db = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/blog", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("===数据库连接成功===");
	} catch (error) {
		console.error("~~~数据库连接失败~~~", error);
	}
};

const disconnect = async () => {
	mongoose.disconnect();
};

module.exports = {
	db: db,
	disconnect: disconnect,
};
