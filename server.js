var express = require('express');
bodyParser = require("body-parser");
require("dotenv").config();

// const userController = require('src/controllers/UserController');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
require('./src/routes/')(app);



// const routes = require("./src/routes");
// app.post('/login',userController.login );

// app.get('/', function (req, res) {
//   res.status(200).json('<h1>Hello Worsssld!</h1>');
// });



var port = process.env.PORT || 3010;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
