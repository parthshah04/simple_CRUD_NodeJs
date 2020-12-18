var mongoose = require('mongoose');
var dburl = 'mongodb://localhost:27017/personalDetails';
mongoose.connect(dburl, { useNewUrlParser: true});


// CONNECTION EVENTS
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to '+ dburl);
});
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
      process.kill(process.pid, 'SIGUSR2');
    });
});
require('./details.model');