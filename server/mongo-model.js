var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

module.exports.poem = mongoose.model("Poem", {
  "title": String,
  "text": String
});
