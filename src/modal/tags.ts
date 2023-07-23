const mongoose = require("mongoose");

let TagsSchema: any;
let MongoTags: any;

if (mongoose.models.Tags) {
	MongoTags = mongoose.model("Tags");
} else {
	TagsSchema = new mongoose.Schema({
		_id: String,
		name: String,
		articles_num: Number,
		"createTime": { "$date": { "$type": "date" } }
	});
	MongoTags = mongoose.model("Tags", TagsSchema);
}

export default MongoTags;
