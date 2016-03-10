/* global __dirname, process  */
var express = require('express');

var env = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

app.listen(config.port, function () {
    console.log("Server runnig on port: " + config.port)
});