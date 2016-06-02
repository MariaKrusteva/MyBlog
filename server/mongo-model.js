var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

module.exports.poem = mongoose.model("Poem", {
  "title": String,
  "text": String
});

module.exports.resipe = mongoose.model("Resipe", {
  "title": String,
  "ingredients": [String],
  "instructions": [String]
});

module.exports.user = mongoose.model("User", {
  name: String,
  password: String
});
