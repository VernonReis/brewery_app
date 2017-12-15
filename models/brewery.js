const mongoose = require('mongoose');

const brewerySchema = mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true}



});


module.exports = mongoose.model('Brewery', brewerySchema);
