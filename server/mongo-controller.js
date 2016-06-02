var Poem = require("./mongo-model").poem;
var Resipe = require("./mongo-model").resipe;
var User = require("./mongo-model").user;

module.exports.listPoems = function (req, res) {
  Poem.find({},{}, function (err, result){
    res.json(result);
  })
}

module.exports.listResipes = function (req, res) {
  Resipe.find({},{}, function (err, result){
    res.json(result);
  })
}

module.exports.createPoem = function (req, res) {
  var poem = new Poem(req.body);
  poem.save(function (error, result){
    res.json(result);
  });
}

module.exports.createResipe = function (req, res) {
  var resipe = new Resipe(req.body);
  resipe.save(function (error, result){
    res.json(result);
  });
}

module.exports.createUser = function (req, res) {
  var user = new User(req.body);
  user.save(function (error, result){
    res.json(result);
  });
}
