const mongoose = require("mongoose");

let CategoriesSchema: any;
let MongoCategories: any;

if (mongoose.models.Categories) {
  MongoCategories = mongoose.model("Categories");
} else {
  CategoriesSchema = new mongoose.Schema({
    _id: String,
    name: String,
    articles_num: Number,
  });
  MongoCategories = mongoose.model("Categories", CategoriesSchema);
}

export default MongoCategories;
