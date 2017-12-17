const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});






module.exports = mongoose.model('Review', userSchema);
