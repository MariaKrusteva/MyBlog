var express = require("express");
var bodyParser = require('body-parser');
var app = express();



var poems = [
  {
    "title": "Lorem ipsum",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac leo ac leo posuere pulvinar. Curabitur sit amet vulputate metus, sed fermentum libero. In hac habitasse platea dictumst. Phasellus luctus nisi nec imperdiet euismod. Morbi at felis id sapien consequat ullamcorper. Donec dignissim accumsan est sit amet varius. Fusce placerat, nunc non vehicula lobortis, elit nisi scelerisque magna, at hendrerit quam ante quis metus. Cras viverra, nulla ac laoreet maximus, tellus eros cursus diam, non sagittis eros justo eget erat. Nullam condimentum, elit vel posuere fringilla, risus metus tincidunt erat, in rhoncus massa augue et lectus. Integer ac ipsum vel est viverra ullamcorper et et purus. Etiam at purus arcu. Morbi sed eros nisi. Pellentesque mattis vel libero eu convallis. Integer urna eros, hendrerit id tincidunt at, posuere a sapien.Donec id odio venenatis, cursus felis et, sagittis arcu. Phasellus nisi augue, commodo sit amet suscipit eu, interdum fringilla purus. Proin eget eleifend arcu, sed ultricies nisi. Quisque orci quam, pulvinar non mauris at, rutrum congue quam. Nullam a arcu commodo, lobortis ligula ut, vehicula enim. Donec eu auctor libero, sed blandit ipsum. Aenean in magna scelerisque, mollis tellus a, elementum nulla. Ut euismod tempus odio, at volutpat enim commodo at. Nam venenatis blandit rhoncus. Integer aliquet diam et felis dignissim porttitor. Integer varius magna leo, quis feugiat tellus ornare ut. Aenean gravida sem eu tortor fringilla, a eleifend ligula facilisis. Nam massa leo, rutrum in tempus at, rutrum ac elit. Aenean sagittis aliquet scelerisque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
    "title": "Phasellus porta",
    "text": "Phasellus porta turpis nisl, vitae ornare nisl tempus at. Sed semper condimentum est sit amet finibus. Aenean tristique in leo vel congue. Vestibulum consequat nulla sit amet mattis semper. Maecenas interdum eros quam, et elementum nibh condimentum ut. Praesent vitae turpis commodo, convallis urna sed, tincidunt quam. Donec sed nisl vitae arcu vestibulum pretium eu eu dui. Donec sollicitudin ultrices nisi, nec tincidunt tort"
  }
  ]

app.use(express.static("public"));

app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", ["X-Requested-With", "Content-Type", "Access-Control-Allow-Methods"]);
  res.header("Access-Control-Allow-Methods", ["DELETE", "PUT"]);
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile("index.html");
})

app.get("/poems", function (req, res) {
  res.json(poems);
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
