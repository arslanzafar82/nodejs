require("dotenv").config();
const config = require("./config");

var express = require('express');
var app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
const routes = require("./src/routes");
app.use("/", routes);




var port = config.port || 3010;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
