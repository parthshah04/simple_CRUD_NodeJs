var mongoose = require('mongoose');
//mongoose.set('userCreateIndex', true);
var detailSchema = new mongoose.Schema({
    name : [String],
    lname : [String],
    email : [String],
    number : [Number]
});

mongoose.model('Detail', detailSchema);