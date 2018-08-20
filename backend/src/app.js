const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require('morgan');
const constants = require("./config/constants");

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(constants.dbConnection, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: 30
});

require('./tinyUrl/model');

const db = mongoose.connection;
db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});
// End connect db


// this will set allow accept domain
const app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-type,Accept,x-access-token,X-Key"
  );
  if (req.method == "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});

require("./tinyUrl/controller")(app);


app.listen(process.env.PORT || 8081)