const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});



userSchema.pre('save', function (next) {
    if (!this.isModified('password')) { return next() }

    const hashedPassword = bcrypt.hashSync(this.password, bcrypt.genSaltSync(13));
    this.password = hashedPassword;
    next();

});


userSchema.methods.authenticate = function (password) {
    return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
