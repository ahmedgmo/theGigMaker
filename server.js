
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// const compression = require('compression');
// const helmet = require('helmet');
// const cors = require('cors');
// const passport = require('passport');
// const initMongo = require('./config/mongo');

const app = express();
const router = express.Router();

const mongoose = require("mongoose");

// Setup express server
var PORT = 3000;

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'))
// }
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)
app.use(express.static("public"));



/* for parsing application/x-www-form-urlencoded ~*/
// app.use(cors())
// app.use(passport.initialize())
// app.use(compression())
// app.use(helmet())
// app.use(express.static('public'))
// app.use(require('./app/routes'))
// app.listen(app.get('port'))

// // Init MongoDB
// initMongo()


var db = process.env.MONGODB_URI || "mongodb://localhost/gigmaker";


//routes

require("./app/routes/project")(router);

app.use(router);






app.listen(PORT, function () {
  mongoose.connect(db, function(err){
    if (err) {
      console.log(err);
    } else {
      console.log("Mongodb connection succesful!");
    }

  });

  console.log("App running on port " + PORT + "!");
});



module.exports = app // for testing
