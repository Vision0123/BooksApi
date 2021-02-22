const mongoose = require('mongoose');
const schema = mongoose.Schema({
    name:String,
    qty:String
});

module.exports = mongoose.model("Book",schema);  