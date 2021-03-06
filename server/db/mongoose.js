var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var MongoDB = mongoose.connect(process.env.MONGODB_URI).connection;

MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
    // console.log("mongodb connection open");
});

module.exports = {mongoose};