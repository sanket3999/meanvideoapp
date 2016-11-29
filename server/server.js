/****************************************************************************************************************/
/*
 *  Users Model
 *  Author  :   Sanket Patel
 *  Date    :   2016.11.25
/****************************************************************************************************************/

/* load packages */

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var _ = require('lodash');
var methodOverride = require('method-override');

/* global variables */
global.sitepath = __dirname;

/* app variables */

var app = express();

var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var port = process.env.PORT || 8181;
global.config = require('./database.json')[env];



// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

var routerController = require('./routes/users');

// REGISTER OUR ROUTES
// =============================================================================
app.use('/', routerController);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);