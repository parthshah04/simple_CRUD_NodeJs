require('./api/data/db.js');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('port', 3000);

app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next(); 
});

app.use(bodyParser.urlencoded({ extended: false }));

//Routes
app.use('/api', routes);

//  requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('server port is' + port);
});