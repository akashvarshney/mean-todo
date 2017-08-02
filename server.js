//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database'); 
var morgan = require('morgan');
var mongoose = require('mongoose');

var port = process.env.PORT||1000;
var app = express();
mongoose.connect(database.localUrl); // Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)
app.use(express.static('./public')); 
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request


// routes ======================================================================
require('./app/route.js')(app);


app.listen(port);
console.log("App listening on port " + port);
