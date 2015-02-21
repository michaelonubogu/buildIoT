
var express  = require('express');
var app = express();                                // create our app w/ express
var mongoose = require('mongoose');                 // mongoose for mongodb
var morgan = require('morgan');                     // log requests to the console (express4)
var bodyParser = require('body-parser');            // pull information from HTML POST (express4)
var methodOverride = require('method-override');    // simulate DELETE and PUT (express4)
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var sys = require('util'),
    fs = require('fs'),
    rest = require('./node_modules/restler');                   // https://npmjs.org/package/restler

app.use(express.static(__dirname + '/www'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


app.get('*', function(req, res) {
    res.sendfile('./www/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen
app.listen(3000);
console.log("App listening on port 3000");