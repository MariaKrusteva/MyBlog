var Poem = require("./mongo-model").poem;

module.exports.listPoems = function (req, res) {
  Poem.find({},{}, function (err, result){
    res.json(result);
  })
}
