const mongoose = require("mongoose");

// mongoose.connect("mongodb://127.0.0.1:27017/demo", {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

const db = async () => {
	try {
		await mongoose.connect("mongodb://localhost:27017/blog", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("数据库连接成功");
	} catch (error) {
		console.error("数据库连接失败", error);
	}
};

// const db = async () => {
// 	try {
// 		await mongoose.connect("mongodb://localhost:27017", function (err: any, client: any) {
// 			if (err) throw err;

// 			// 指定数据库和集合
// 			const db = client.db('blog');
// 			const collection = db.collection('yourCollection');

// 			// 更新每个文档，为新字段赋值当前时间
// 			collection.updateMany({}, { $currentDate: { createTime: true } }, function (err: any, result: any) {
// 				if (err) throw err;

// 				console.log(`${result.modifiedCount} 文档已更新`);

// 				// 关闭连接
// 				client.close();
// 			});
// 		});
// 		console.log("数据库连接成功");
// 	} catch (error) {
// 		console.error("数据库连接失败", error);
// 	}
// };

export default db;
