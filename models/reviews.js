const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const reviewSchema = mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    breweryID: { type: mongoose.Schema.Types.ObjectId, ref: 'Brewery' }
});






module.exports = mongoose.model('Review', reviewSchema);
