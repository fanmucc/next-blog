const fs = require("fs");
const path = require("path");

const { db, disconnect } = require("./index.js");
const MongoBlog = require("./schema/blog.js");

const insetData = async () => {
	// 数据库连接成功后 插入相关数据
	console.log("===数据库连接中===");
	try {
		db();
		const jsonData = JSON.parse(
			fs.readFileSync(path.join("./src/data/blog/index.json"), "utf8")
		);
		// const createdData = await MongoBlog.create(jsonData);
		await MongoBlog.create(jsonData);
		console.log("===数据已成功插入到表中===");
	} catch (error) {
		console.error("~~~插入数据时发生错误~~~", error);
	} finally {
		// 断开与数据库的连接
		console.log("===数据库已成功断开===");
		disconnect();
	}
};

// 插入数据
insetData();
