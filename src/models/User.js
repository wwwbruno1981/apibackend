const mongoose = require( "mongoose" );
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    tel: Number,
    testo: String,
});

module.exports = mongoose.model('User', UserSchema);