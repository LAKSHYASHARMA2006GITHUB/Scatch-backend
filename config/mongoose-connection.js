const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("connected"); // not use clg use debuggers in replace of it.
})
.catch(function(err){
    console.log(err); // not use clg use debuggers in replace of it.
})

module.exports = mongoose.connection;